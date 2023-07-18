'use client'

import './home.css'
import { useEffect, useState } from "react"
import antlr4 from 'antlr4';
import twine_harloweLexer from '../antlr-files/twine_harloweLexer';
import twine_harloweParser from '../antlr-files/twine_harloweParser';
import customTwineHarloweVisitor from '../antlr-files/customVisitor';

const { CommonTokenStream, InputStream } = antlr4;

export default function Home() {
  const [vars, setVars] = useState({});
  const [text, setText] = useState("");
  const [js, setJs] = useState("");
  const [passage, setPassage] = useState({text: "", links: [], cleanText: ""})

  const parse = () => {
    var chars = new InputStream(text, true);  
    var lexer = new twine_harloweLexer(chars);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new twine_harloweParser(tokens);
    parser.buildParseTrees = true;   
    var tree = parser.passage();
    var code = [];
    var visitor = new customTwineHarloweVisitor(code);
    visitor.visitPassage(tree); // start recursion
    var jscode = code.join('');
    setJs(jscode);
    console.log(jscode);
    eval(jscode);
  }

  return (
    <div className="container">
      <div className="passage-wrapper">
        <div className="passage">
          <h3>Enter Passage</h3>
          <textarea onChange={(e) => {setText(e.target.value)}}></textarea>
          <button onClick={parse}>Parse</button>
        </div>
        <div className="output">
          <h3>Javascript</h3>
          <pre>{js}</pre>
        </div>
        <div className="passage-display">
          <h3>Passage</h3>
          <p>{passage.cleanText}</p>
          <button onClick={()=>{setPassage({text: "", links: [], cleanText: ""})}}>reset</button>
        </div>
      </div>
      <div className="runtime">
        <h3>Runtime Variables</h3>
        <div className="variables">
          {
            Object.keys(vars).map(key => 
              <div key={key} className="var">
                <p className='key'>{key}</p>
                <p className='val'>{vars[key as keyof object]}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
