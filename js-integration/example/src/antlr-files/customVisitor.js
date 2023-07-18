import antlr4 from 'antlr4';
import twine_harloweVisitor from '../antlr-files/twine_harloweVisitor';

export default class customTwineHarloweVisitor extends twine_harloweVisitor {
    constructor(out) {
        super();
        this.out = out;
    }

    // Visit a parse tree produced by twine_harloweParser#passage.
	visitPassage(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#stmt.
	visitStmt(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#conditional_block.
	visitConditional_block(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#ifblock.
	visitIfblock(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#elseifblock.
	visitElseifblock(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#elseblock.
	visitElseblock(ctx) {
	    return this.visitChildren(ctx);
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
        for (let i = 0; i < ctx.children.length; i++) {
            console.log(i, ctx.children[i]);
            if (i == 0 || i == ctx.children.length - 1) {
                if (ctx.children[i].ruleIndex == 7)
                    this.visitCondition(ctx.children[i])
                else if (ctx.children[i].ruleIndex == 87)
                    this.visitExpr(ctx.children[i])
            }
            else if (i > 0 && i < ctx.children.length - 1) {
                this.out.push(ctx.children[i].getText());
            }
        }
	    // return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#expr.
	visitExpr(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#value.
	visitValue(ctx) {
	    return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by twine_harloweParser#array.
	visitArray(ctx) {
        this.out.push('{');
        var flag = 0;
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (child['ruleIndex'] == 8) {
                    if (flag)
                        this.out.push(',');
                    this.visitExpr(child)
                    flag = 1;
                }
            }
        }
        this.out.push('}');
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
        var flag = 0;
        var alias = "";
        var link = "";
        for (let child of ctx.children) {
            if ('ruleIndex' in child) {
                if (!flag) {
                    flag = 1;
                    alias = child.getText();
                    link = alias;
                } else {
                    link = child.getText();
                }
            }
        }
        this.out.push(`\npassage.links.push({"name": "${alias}", "linkText": "${link}", text: "${ctx.getText()}"})`)
	}


	// Visit a parse tree produced by twine_harloweParser#text.
	visitText(ctx) {
        this.out.push(ctx.getText());
	    return this.visitChildren(ctx);
	}

}