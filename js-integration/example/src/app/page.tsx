'use client'

import './home.css';
import { useState } from "react";
import antlr4 from 'antlr4';
import twine_harloweLexer from '../antlr-files/twine_harloweLexer';
import twine_harloweParser from '../antlr-files/twine_harloweParser';
import customTwineHarloweVisitor from '../antlr-files/customVisitor';
import Interpreter from 'js-interpreter';


const { CommonTokenStream, InputStream } = antlr4;

export default function Home() {
  const [vars, setVars] = useState({});
  const [text, setText] = useState("");
  const [js, setJs] = useState("");
  const [passage, setPassage] = useState({text: "", links: [], cleanText: ""})

  const parse = () => {
    // set antlr files up
    var chars = new InputStream(text, true);  
    var lexer = new twine_harloweLexer(chars);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new twine_harloweParser(tokens);

    // build passage tree
    parser.buildParseTrees = true;   
    var tree = parser.passage();
    var code:string[] = [];
    var visitor = new customTwineHarloweVisitor(code);
    visitor.visitPassage(tree); // start recursion
    setJs(code.join(''));

    // evaluate the js-code
    
    // we will define two wrappers, one that loads the runtime variables in and another that loads it out
    // hence we need to load the runtime in before the code is run and then extract it out after.
    var jscode = 'var runtime_content = JSON.parse(loadVariables());\nvar vars = runtime_content[0];\nvar passage = runtime_content[1];\n' + 
                  code.join('') + 'setVariables(JSON.stringify([vars, passage]));';
    // console.log(jscode);
    
    function initFunc(interpreter: any, globalObject: any) {
      var wrapper = function alert(text: any) {
        return window.alert(arguments.length ? text : '');
      };
      interpreter.setProperty(globalObject, 'alert',
          interpreter.createNativeFunction(wrapper));
        
      var loadWrapper = function loadVariables() {
        var runtime_content = [vars, passage];
        return JSON.stringify(runtime_content);
      };
      interpreter.setProperty(globalObject, 'loadVariables',
          interpreter.createNativeFunction(loadWrapper));

      var setWrapper = function setVariables(var_obj: any) {
        var runtime_content = JSON.parse(var_obj);
        // console.log('extracted: ', runtime_content)
        setPassage(runtime_content[1]);
        setVars(runtime_content[0]);
      };
      interpreter.setProperty(globalObject, 'setVariables',
          interpreter.createNativeFunction(setWrapper));
    }
    var myInterpreter = new Interpreter(jscode, initFunc);
    myInterpreter.run();
  }

  const addNewVar = () => {
    // TODO modify to handle string inputs
    const k = document.getElementById('key_new');
    const v = document.getElementById('val_new');
    var val = v.value;
    if (!isNaN(+val)) {
      val = +val;
    }
    setVars({...vars, [k.value]: val});
    k.value = '';
    v.value = '';
  }

  return (
    <div className="container">
      <div className="passage-wrapper">
        <h1>Input</h1>
        <div className="passage">
          <h3>Enter Passage</h3>
          <textarea onChange={(e) => {setText(e.target.value)}}></textarea>
          <button onClick={parse}>transpile</button>
        </div>
        <h1>Output</h1>
        <div className="output">
          <h3>Javascript</h3>
          <pre>{js}</pre>
        </div>
        <div className="passage-display">
          <div>
            <h3>Passage</h3>
            <p>{passage.cleanText}</p>
          </div>
          <div>
            <h3>Links</h3>
            {
              passage.links.map((element, index) => {
                return <div key={index} className='link'>{element.name + ' -> ' + element.linkText}</div>
              })
            }
          </div>
        </div>
        <button onClick={()=>{setPassage({text: "", links: [], cleanText: ""}); setJs("");}}>clear</button>
      </div>
      <div className="runtime">
        <h3>Runtime Variables</h3>
        <p>Any variables you set on the left or add below will be tracked here</p>
        <div className="variables">
          {
            Object.keys(vars).map(key => 
              <div key={key} className="var">
                <p className='key'>{key}</p>
                <p className='val'>{
                  (
                    Array.isArray(vars[key as keyof object]) ? 
                      vars[key as keyof object].join(', ')
                    :
                      vars[key as keyof object])
                }
                </p>
              </div>
            )
          }
          <div className="var new">
              <input id='key_new' className='key' placeholder="name"/>
              <input id='val_new' className='val' placeholder="value"/>
              <button type="submit" onClick={addNewVar}>add</button>
          </div>
        </div>
        <button onClick={()=>{setVars({})}}>reset</button>
      </div>
    </div>
  )
}
