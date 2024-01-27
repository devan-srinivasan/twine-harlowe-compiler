import antlr4 from 'antlr4';
import twine_harloweVisitor from '../antlr-files/twine_harloweVisitor';

const CONDITION_RI = 7;
const STATEMENT_RI = 1;
const VALUE_RI = 9;
const VARIABLE_RI = 12;
const EXPRESSION_RI = 8;
const LITERAL_RI = 11;

export default class customTwineHarloweVisitor extends twine_harloweVisitor {
    constructor(out) {
        super();
        this.out = out;
    }

    // Visit a parse tree produced by twine_harloweParser#passage.
	visitPassage(ctx) {
	    return this.visitChildren(ctx, 0);
	}


	// Visit a parse tree produced by twine_harloweParser#stmt.
	visitStmt(ctx) {
        if (!/\w/.test(ctx.getText()))
            // grabbed some whitespace as its own statement, early return
            // note this won't happen with indented TEXT as that would have text content
            return this.visitChildren(ctx);
	    var returnMe = this.visitChildren(ctx);
        this.out.push(';\n');
        return returnMe;
	}


	// Visit a parse tree produced by twine_harloweParser#conditional_block.
	visitConditional_block(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#ifblock.
	visitIfblock(ctx) {
        this.out.push('if (');
	    ctx.children.map((child, i) => {
            if ('ruleIndex' in child && child.ruleIndex == CONDITION_RI) {
                // condition
                this.visitCondition(child);
                this.out.push(') {\n');
            } 
            if ('ruleIndex' in child && child.ruleIndex == STATEMENT_RI) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}');
	}


	// Visit a parse tree produced by twine_harloweParser#elseifblock.
	visitElseifblock(ctx) {
	    this.out.push('else if (');
	    ctx.children.map((child, i) => {
            if ('ruleIndex' in child && child.ruleIndex == CONDITION_RI) {
                // condition
                this.visitCondition(child);
                this.out.push(') {\n');
            } 
            if ('ruleIndex' in child && child.ruleIndex == STATEMENT_RI) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}');
	}


	// Visit a parse tree produced by twine_harloweParser#elseblock.
	visitElseblock(ctx) {
	    this.out.push('else {\n');
	    ctx.children.map((child, i) => { 
            if ('ruleIndex' in child && child.ruleIndex == STATEMENT_RI) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}');
	}


	// Visit a parse tree produced by twine_harloweParser#set.
	visitSet(ctx) {
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (child['ruleIndex'] == VARIABLE_RI) {
                    this.visitVariable(child);
                    this.out.push(' = ');
                } else if (child['ruleIndex'] == VALUE_RI) {
                    this.visitValue(child);
                }
            }
        }
	    // return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#condition.
	visitCondition(ctx) {
        ctx.children.map((child, i) => {
            if ('ruleIndex' in child) {
                if (child.ruleIndex == CONDITION_RI) // condition
                    this.visitCondition(child);
                else if (child.ruleIndex == EXPRESSION_RI)
                    this.visitExpr(child); // expression
            }
            else {
                this.out.push(child.getText().replace('is', '==').replace('and', '&&').replace('or', '||'));
            }
        })
	    // return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#expr.
	visitExpr(ctx) {
	    ctx.children.map((child, i) => {
            if ('ruleIndex' in child) {
                if (child.ruleIndex == LITERAL_RI) // condition
                    this.visitLiteral(child);
                else if (child.ruleIndex == EXPRESSION_RI)
                    this.visitExpr(child); // expression
            }
            else {
                this.out.push(child.getText());
            }
        })
	}


	// Visit a parse tree produced by twine_harloweParser#value.
	visitValue(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#array.
	visitArray(ctx) {
        this.out.push('[');
        var firstElementFound = 0;
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (child['ruleIndex'] == EXPRESSION_RI) { // expression
                    if (firstElementFound)
                        this.out.push(',');
                    this.visitExpr(child)
                    firstElementFound = 1;
                }
            }
        }
        this.out.push(']');
	    // return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#literal.
	visitLiteral(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#variable.
	visitVariable(ctx) {
        console.log("var")
        this.out.push(ctx.getText().replace('$', 'vars.'))
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#num.
	visitNum(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#floating.
	visitFloating(ctx) {
        this.out.push(ctx.getText());
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#integer.
	visitInteger(ctx) {
        this.out.push(ctx.getText());
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#string.
	visitString(ctx) {
        this.out.push(ctx.getText().replace('"', '\"'));
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#link.
	visitLink(ctx) {
        var aliasFound = 0;
        var alias = "";  // link name i.e. [[alias->link]]
        var link = "";
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (!aliasFound) {
                    aliasFound = 1;
                    alias = child.getText();
                    link = alias;
                } else {
                    link = child.getText();
                }
            }
        }
        this.out.push(`passage.links.push({"name": "${alias}", "linkText": "${link}", text: "${ctx.getText()}"})`)
	}


	// Visit a parse tree produced by twine_harloweParser#text.
	visitText(ctx) {
        var text_trimmed = trimText(ctx.getText());
        text_trimmed = text_trimmed.replaceAll('\n', '\\n');
        // need to trim the start of all lines and the end except newline char
        if (text_trimmed.length > 0)
            this.out.push(`passage.cleanText += \"${text_trimmed}\"`);
	    return this.visitChildren(ctx);
	}

}

function trimText(text) {
    text = text.trimStart();
    var endOfTextSplice = text.length;
    for (let i = text.length - 1; i >= 0; i--) {
        if (!/\s/.test(text[i])) {
            endOfTextSplice = i + 2;
            break;
        }
    }
    return text.slice(0, endOfTextSplice);
}