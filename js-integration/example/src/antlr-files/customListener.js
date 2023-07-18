import antlr4 from 'antlr4';
import twine_harloweListener from './twine_harloweListener';

export default class customTwineHarloweListener extends twine_harloweListener {
    // for typescript error
    visitTerminal = () => { };
    visitErrorNode = () => { };
    enterEveryRule = () => { };
    exitEveryRule = () => { };

    constructor(out) {
        super();
        this.out = out;
    }

	// Enter a parse tree produced by twine_harloweParser#ifblock.
	enterIfblock(ctx) {
        console.log(ctx);
	}

	// Exit a parse tree produced by twine_harloweParser#ifblock.
	exitIfblock(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#elseifblock.
	enterElseifblock(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#elseifblock.
	exitElseifblock(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#elseblock.
	enterElseblock(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#elseblock.
	exitElseblock(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#set.
	enterSet(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#set.
	exitSet(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#condition.
	enterCondition(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#condition.
	exitCondition(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#expr.
	enterExpr(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#expr.
	exitExpr(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#value.
	enterValue(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#value.
	exitValue(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#array.
	enterArray(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#array.
	exitArray(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#literal.
	enterLiteral(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#literal.
	exitLiteral(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#variable.
	enterVariable(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#variable.
	exitVariable(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#num.
	enterNum(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#num.
	exitNum(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#floating.
	enterFloating(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#floating.
	exitFloating(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#integer.
	enterInteger(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#integer.
	exitInteger(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#string.
	enterString(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#string.
	exitString(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#link.
	enterLink(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#link.
	exitLink(ctx) {
	}


	// Enter a parse tree produced by twine_harloweParser#text.
	enterText(ctx) {
	}

	// Exit a parse tree produced by twine_harloweParser#text.
	exitText(ctx) {
	}



}