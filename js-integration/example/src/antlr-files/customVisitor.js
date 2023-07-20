import antlr4 from 'antlr4';
import twine_harloweVisitor from '../antlr-files/twine_harloweVisitor';

const tab = (x) => '\t'.repeat(x);

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
        console.log(ctx, ctx.getText());
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
        this.out.push('if (')
	    ctx.children.map((child, i) => {
            if ('ruleIndex' in child && child.ruleIndex == 7) {
                // condition
                this.visitCondition(child);
                this.out.push(') {\n');
            } 
            if ('ruleIndex' in child && child.ruleIndex == 1) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}')
	}


	// Visit a parse tree produced by twine_harloweParser#elseifblock.
	visitElseifblock(ctx) {
	    this.out.push('else if (')
	    ctx.children.map((child, i) => {
            if ('ruleIndex' in child && child.ruleIndex == 7) {
                // condition
                this.visitCondition(child);
                this.out.push(') {\n');
            } 
            if ('ruleIndex' in child && child.ruleIndex == 1) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}')
	}


	// Visit a parse tree produced by twine_harloweParser#elseblock.
	visitElseblock(ctx) {
	    this.out.push('else {\n')
	    ctx.children.map((child, i) => { 
            if ('ruleIndex' in child && child.ruleIndex == 1) {
                // statment (and possibly more to follow)
                this.visitStmt(child);
            }
        })
        this.out.push('}')
	}


	// Visit a parse tree produced by twine_harloweParser#set.
	visitSet(ctx) {
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (child['ruleIndex'] == 12) {
                    this.visitVariable(child);
                    this.out.push(' = ');
                } else if (child['ruleIndex'] == 9) {
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
                if (child.ruleIndex == 7) // condition
                    this.visitCondition(child)
                else if (child.ruleIndex == 8)
                    this.visitExpr(child) // expression
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
                if (child.ruleIndex == 11) // condition
                    this.visitLiteral(child)
                else if (child.ruleIndex == 8)
                    this.visitExpr(child) // expression
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
                if (child['ruleIndex'] == 8) { // expression
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
        console.log(ctx.getText().replace('\n', ));
        // need to trim the start of all lines and the end except newline char
        this.out.push(`passage.cleanText += \`${trimText(ctx.getText())}\``);
	    return this.visitChildren(ctx);
	}

}

function trimText(text) {
    text = text.trimStart();
    console.log(text, "length: ", text.length);
    var endOfTextSplice = text.length;
    for (let i = text.length - 1; i >= 0; i--) {
        if (!/\s/.test(text[i])) {
            endOfTextSplice = i + 2;
            break;
        }
    }
    return text.slice(0, endOfTextSplice);
}