// Generated from twine_harlowe.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import twine_harloweListener from './twine_harloweListener.js';
import twine_harloweVisitor from './twine_harloweVisitor.js';

const serializedATN = [4,1,31,380,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,4,0,40,8,
0,11,0,12,0,41,1,1,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,5,2,53,8,2,10,2,12,
2,56,9,2,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,5,2,65,8,2,10,2,12,2,68,9,2,
1,2,3,2,71,8,2,1,3,1,3,1,3,5,3,76,8,3,10,3,12,3,79,9,3,1,3,1,3,5,3,83,8,
3,10,3,12,3,86,9,3,1,3,1,3,5,3,90,8,3,10,3,12,3,93,9,3,1,3,1,3,5,3,97,8,
3,10,3,12,3,100,9,3,1,3,1,3,1,4,1,4,1,4,5,4,107,8,4,10,4,12,4,110,9,4,1,
4,1,4,5,4,114,8,4,10,4,12,4,117,9,4,1,4,1,4,5,4,121,8,4,10,4,12,4,124,9,
4,1,4,1,4,5,4,128,8,4,10,4,12,4,131,9,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,139,
8,5,10,5,12,5,142,9,5,1,5,1,5,5,5,146,8,5,10,5,12,5,149,9,5,1,5,1,5,1,6,
1,6,1,6,5,6,156,8,6,10,6,12,6,159,9,6,1,6,1,6,4,6,163,8,6,11,6,12,6,164,
1,6,1,6,4,6,169,8,6,11,6,12,6,170,1,6,1,6,5,6,175,8,6,10,6,12,6,178,9,6,
1,6,1,6,1,7,1,7,1,7,5,7,185,8,7,10,7,12,7,188,9,7,1,7,1,7,5,7,192,8,7,10,
7,12,7,195,9,7,1,7,1,7,1,7,1,7,5,7,201,8,7,10,7,12,7,204,9,7,1,7,1,7,5,7,
208,8,7,10,7,12,7,211,9,7,1,7,1,7,3,7,215,8,7,1,7,1,7,5,7,219,8,7,10,7,12,
7,222,9,7,1,7,1,7,5,7,226,8,7,10,7,12,7,229,9,7,1,7,5,7,232,8,7,10,7,12,
7,235,9,7,1,8,1,8,1,8,5,8,240,8,8,10,8,12,8,243,9,8,1,8,1,8,5,8,247,8,8,
10,8,12,8,250,9,8,1,8,1,8,1,8,3,8,255,8,8,1,8,1,8,5,8,259,8,8,10,8,12,8,
262,9,8,1,8,1,8,5,8,266,8,8,10,8,12,8,269,9,8,1,8,5,8,272,8,8,10,8,12,8,
275,9,8,1,9,1,9,3,9,279,8,9,1,10,1,10,1,10,5,10,284,8,10,10,10,12,10,287,
9,10,1,10,1,10,5,10,291,8,10,10,10,12,10,294,9,10,1,10,1,10,5,10,298,8,10,
10,10,12,10,301,9,10,1,10,5,10,304,8,10,10,10,12,10,307,9,10,1,10,5,10,310,
8,10,10,10,12,10,313,9,10,1,10,1,10,1,11,1,11,1,11,3,11,320,8,11,1,12,1,
12,4,12,324,8,12,11,12,12,12,325,1,13,1,13,3,13,330,8,13,1,14,3,14,333,8,
14,1,14,5,14,336,8,14,10,14,12,14,339,9,14,1,14,1,14,4,14,343,8,14,11,14,
12,14,344,1,15,3,15,348,8,15,1,15,4,15,351,8,15,11,15,12,15,352,1,16,1,16,
5,16,357,8,16,10,16,12,16,360,9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,3,
17,369,8,17,1,17,1,17,1,17,1,17,1,18,4,18,376,8,18,11,18,12,18,377,1,18,
0,2,14,16,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,6,1,0,
18,22,1,0,16,17,1,0,23,26,2,0,6,6,29,30,1,0,5,5,6,0,3,9,14,14,16,17,22,22,
24,26,28,31,415,0,39,1,0,0,0,2,48,1,0,0,0,4,50,1,0,0,0,6,72,1,0,0,0,8,103,
1,0,0,0,10,134,1,0,0,0,12,152,1,0,0,0,14,214,1,0,0,0,16,254,1,0,0,0,18,278,
1,0,0,0,20,280,1,0,0,0,22,319,1,0,0,0,24,321,1,0,0,0,26,329,1,0,0,0,28,332,
1,0,0,0,30,347,1,0,0,0,32,354,1,0,0,0,34,363,1,0,0,0,36,375,1,0,0,0,38,40,
3,2,1,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,1,1,0,
0,0,43,49,3,4,2,0,44,49,3,12,6,0,45,49,3,24,12,0,46,49,3,34,17,0,47,49,3,
36,18,0,48,43,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,
0,0,0,49,3,1,0,0,0,50,54,3,6,3,0,51,53,5,28,0,0,52,51,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,60,1,0,0,0,56,54,1,0,0,0,57,59,3,8,4,
0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,66,1,0,0,0,
62,60,1,0,0,0,63,65,5,28,0,0,64,63,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,
67,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,69,71,3,10,5,0,70,69,1,0,0,0,70,71,
1,0,0,0,71,5,1,0,0,0,72,73,5,3,0,0,73,77,5,10,0,0,74,76,5,28,0,0,75,74,1,
0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,
0,0,80,84,3,14,7,0,81,83,5,28,0,0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,
0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,91,5,4,0,0,88,90,5,28,0,
0,89,88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,
93,91,1,0,0,0,94,98,5,1,0,0,95,97,3,2,1,0,96,95,1,0,0,0,97,100,1,0,0,0,98,
96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,102,5,2,0,0,102,
7,1,0,0,0,103,104,5,3,0,0,104,108,5,11,0,0,105,107,5,28,0,0,106,105,1,0,
0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,
108,1,0,0,0,111,115,3,14,7,0,112,114,5,28,0,0,113,112,1,0,0,0,114,117,1,
0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,
122,5,4,0,0,119,121,5,28,0,0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,
0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,122,1,0,0,0,125,129,5,1,0,0,126,
128,3,2,1,0,127,126,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,
0,0,130,132,1,0,0,0,131,129,1,0,0,0,132,133,5,2,0,0,133,9,1,0,0,0,134,135,
5,3,0,0,135,136,5,12,0,0,136,140,5,4,0,0,137,139,5,28,0,0,138,137,1,0,0,
0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,
1,0,0,0,143,147,5,1,0,0,144,146,3,2,1,0,145,144,1,0,0,0,146,149,1,0,0,0,
147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,
5,2,0,0,151,11,1,0,0,0,152,153,5,3,0,0,153,157,5,13,0,0,154,156,5,28,0,0,
155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,
1,0,0,0,159,157,1,0,0,0,160,162,3,24,12,0,161,163,5,28,0,0,162,161,1,0,0,
0,163,164,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,168,
5,14,0,0,167,169,5,28,0,0,168,167,1,0,0,0,169,170,1,0,0,0,170,168,1,0,0,
0,170,171,1,0,0,0,171,172,1,0,0,0,172,176,3,18,9,0,173,175,5,28,0,0,174,
173,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,179,1,0,
0,0,178,176,1,0,0,0,179,180,5,4,0,0,180,13,1,0,0,0,181,182,6,7,-1,0,182,
186,5,3,0,0,183,185,5,28,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,
0,0,186,187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,193,3,14,7,0,190,
192,5,28,0,0,191,190,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,
0,0,194,196,1,0,0,0,195,193,1,0,0,0,196,197,5,4,0,0,197,215,1,0,0,0,198,
202,3,16,8,0,199,201,5,28,0,0,200,199,1,0,0,0,201,204,1,0,0,0,202,200,1,
0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,202,1,0,0,0,205,209,7,0,0,0,206,
208,5,28,0,0,207,206,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,
0,0,210,212,1,0,0,0,211,209,1,0,0,0,212,213,3,16,8,0,213,215,1,0,0,0,214,
181,1,0,0,0,214,198,1,0,0,0,215,233,1,0,0,0,216,220,10,3,0,0,217,219,5,28,
0,0,218,217,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,
223,1,0,0,0,222,220,1,0,0,0,223,227,7,1,0,0,224,226,5,28,0,0,225,224,1,0,
0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,230,1,0,0,0,229,
227,1,0,0,0,230,232,3,14,7,4,231,216,1,0,0,0,232,235,1,0,0,0,233,231,1,0,
0,0,233,234,1,0,0,0,234,15,1,0,0,0,235,233,1,0,0,0,236,237,6,8,-1,0,237,
241,5,3,0,0,238,240,5,28,0,0,239,238,1,0,0,0,240,243,1,0,0,0,241,239,1,0,
0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,241,1,0,0,0,244,248,3,16,8,0,245,
247,5,28,0,0,246,245,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,
0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,5,4,0,0,252,255,1,0,0,0,253,
255,3,22,11,0,254,236,1,0,0,0,254,253,1,0,0,0,255,273,1,0,0,0,256,260,10,
3,0,0,257,259,5,28,0,0,258,257,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,
261,1,0,0,0,261,263,1,0,0,0,262,260,1,0,0,0,263,267,7,2,0,0,264,266,5,28,
0,0,265,264,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,
270,1,0,0,0,269,267,1,0,0,0,270,272,3,16,8,4,271,256,1,0,0,0,272,275,1,0,
0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,17,1,0,0,0,275,273,1,0,0,0,276,279,
3,20,10,0,277,279,3,22,11,0,278,276,1,0,0,0,278,277,1,0,0,0,279,19,1,0,0,
0,280,281,5,3,0,0,281,285,5,15,0,0,282,284,5,28,0,0,283,282,1,0,0,0,284,
287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,285,1,0,
0,0,288,305,3,16,8,0,289,291,5,28,0,0,290,289,1,0,0,0,291,294,1,0,0,0,292,
290,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,292,1,0,0,0,295,299,5,9,
0,0,296,298,5,28,0,0,297,296,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,
300,1,0,0,0,300,302,1,0,0,0,301,299,1,0,0,0,302,304,3,16,8,0,303,292,1,0,
0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,311,1,0,0,0,307,
305,1,0,0,0,308,310,5,28,0,0,309,308,1,0,0,0,310,313,1,0,0,0,311,309,1,0,
0,0,311,312,1,0,0,0,312,314,1,0,0,0,313,311,1,0,0,0,314,315,5,4,0,0,315,
21,1,0,0,0,316,320,3,26,13,0,317,320,3,32,16,0,318,320,3,24,12,0,319,316,
1,0,0,0,319,317,1,0,0,0,319,318,1,0,0,0,320,23,1,0,0,0,321,323,5,7,0,0,322,
324,7,3,0,0,323,322,1,0,0,0,324,325,1,0,0,0,325,323,1,0,0,0,325,326,1,0,
0,0,326,25,1,0,0,0,327,330,3,28,14,0,328,330,3,30,15,0,329,327,1,0,0,0,329,
328,1,0,0,0,330,27,1,0,0,0,331,333,5,24,0,0,332,331,1,0,0,0,332,333,1,0,
0,0,333,337,1,0,0,0,334,336,5,30,0,0,335,334,1,0,0,0,336,339,1,0,0,0,337,
335,1,0,0,0,337,338,1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,0,340,342,5,8,
0,0,341,343,5,30,0,0,342,341,1,0,0,0,343,344,1,0,0,0,344,342,1,0,0,0,344,
345,1,0,0,0,345,29,1,0,0,0,346,348,5,24,0,0,347,346,1,0,0,0,347,348,1,0,
0,0,348,350,1,0,0,0,349,351,5,30,0,0,350,349,1,0,0,0,351,352,1,0,0,0,352,
350,1,0,0,0,352,353,1,0,0,0,353,31,1,0,0,0,354,358,5,5,0,0,355,357,8,4,0,
0,356,355,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,361,
1,0,0,0,360,358,1,0,0,0,361,362,5,5,0,0,362,33,1,0,0,0,363,364,5,1,0,0,364,
368,5,1,0,0,365,366,3,36,18,0,366,367,5,27,0,0,367,369,1,0,0,0,368,365,1,
0,0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,371,3,36,18,0,371,372,5,2,0,0,
372,373,5,2,0,0,373,35,1,0,0,0,374,376,7,5,0,0,375,374,1,0,0,0,376,377,1,
0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,37,1,0,0,0,51,41,48,54,60,66,70,
77,84,91,98,108,115,122,129,140,147,157,164,170,176,186,193,202,209,214,
220,227,233,241,248,254,260,267,273,278,285,292,299,305,311,319,325,329,
332,337,344,347,352,358,368,377];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class twine_harloweParser extends antlr4.Parser {

    static grammarFileName = "twine_harlowe.g4";
    static literalNames = [ null, "'['", "']'", "'('", "')'", "'\"'", "'_'", 
                            "'$'", "'.'", "','", "'if:'", "'else-if:'", 
                            "'else:'", "'set:'", "'to'", "'a:'", "'and'", 
                            "'or'", "'>'", "'<'", "'>='", "'<='", "'is'", 
                            "'+'", "'-'", "'*'", "'/'", "'->'" ];
    static symbolicNames = [ null, "LBRACK", "RBRACK", "LPAR", "RPAR", "QUOTE", 
                             "UNDERSCORE", "DS", "DOT", "COMMA", "IF", "ELSEIF", 
                             "ELSE", "SET", "TO", "ARR_START", "AND", "OR", 
                             "GT", "LT", "GE", "LE", "IS", "PLUS", "MINUS", 
                             "ASTERIK", "FSLASH", "ARROW", "WS", "ALPHA", 
                             "DIGIT", "ALL_ELSE" ];
    static ruleNames = [ "passage", "stmt", "conditional_block", "ifblock", 
                         "elseifblock", "elseblock", "set", "condition", 
                         "expr", "value", "array", "literal", "variable", 
                         "num", "floating", "integer", "string", "link", 
                         "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = twine_harloweParser.ruleNames;
        this.literalNames = twine_harloweParser.literalNames;
        this.symbolicNames = twine_harloweParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.condition_sempred(localctx, predIndex);
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	passage() {
	    let localctx = new PassageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, twine_harloweParser.RULE_passage);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.stmt();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4148380666) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, twine_harloweParser.RULE_stmt);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.conditional_block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.set();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.variable();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.link();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
	            this.text();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional_block() {
	    let localctx = new Conditional_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, twine_harloweParser.RULE_conditional_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.ifblock();
	        this.state = 54;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 51;
	                this.match(twine_harloweParser.WS); 
	            }
	            this.state = 56;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 57;
	                this.elseifblock(); 
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 63;
	                this.match(twine_harloweParser.WS); 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 69;
	            this.elseblock();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifblock() {
	    let localctx = new IfblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, twine_harloweParser.RULE_ifblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(twine_harloweParser.LPAR);
	        this.state = 73;
	        this.match(twine_harloweParser.IF);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 74;
	            this.match(twine_harloweParser.WS);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.condition(0);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 81;
	            this.match(twine_harloweParser.WS);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
	        this.match(twine_harloweParser.RPAR);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 88;
	            this.match(twine_harloweParser.WS);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this.match(twine_harloweParser.LBRACK);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4148380666) !== 0)) {
	            this.state = 95;
	            this.stmt();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
	        this.match(twine_harloweParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseifblock() {
	    let localctx = new ElseifblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, twine_harloweParser.RULE_elseifblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(twine_harloweParser.LPAR);
	        this.state = 104;
	        this.match(twine_harloweParser.ELSEIF);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 105;
	            this.match(twine_harloweParser.WS);
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this.condition(0);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 112;
	            this.match(twine_harloweParser.WS);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(twine_harloweParser.RPAR);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 119;
	            this.match(twine_harloweParser.WS);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
	        this.match(twine_harloweParser.LBRACK);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4148380666) !== 0)) {
	            this.state = 126;
	            this.stmt();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this.match(twine_harloweParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseblock() {
	    let localctx = new ElseblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, twine_harloweParser.RULE_elseblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(twine_harloweParser.LPAR);
	        this.state = 135;
	        this.match(twine_harloweParser.ELSE);
	        this.state = 136;
	        this.match(twine_harloweParser.RPAR);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 137;
	            this.match(twine_harloweParser.WS);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
	        this.match(twine_harloweParser.LBRACK);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4148380666) !== 0)) {
	            this.state = 144;
	            this.stmt();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
	        this.match(twine_harloweParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set() {
	    let localctx = new SetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, twine_harloweParser.RULE_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(twine_harloweParser.LPAR);
	        this.state = 153;
	        this.match(twine_harloweParser.SET);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 154;
	            this.match(twine_harloweParser.WS);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.variable();
	        this.state = 162; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 161;
	            this.match(twine_harloweParser.WS);
	            this.state = 164; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 166;
	        this.match(twine_harloweParser.TO);
	        this.state = 168; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 167;
	            this.match(twine_harloweParser.WS);
	            this.state = 170; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	        this.state = 172;
	        this.value();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 173;
	            this.match(twine_harloweParser.WS);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 179;
	        this.match(twine_harloweParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ConditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, twine_harloweParser.RULE_condition, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 182;
	            this.match(twine_harloweParser.LPAR);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 183;
	                this.match(twine_harloweParser.WS);
	                this.state = 188;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 189;
	            this.condition(0);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 190;
	                this.match(twine_harloweParser.WS);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 196;
	            this.match(twine_harloweParser.RPAR);
	            break;

	        case 2:
	            this.state = 198;
	            this.expr(0);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 199;
	                this.match(twine_harloweParser.WS);
	                this.state = 204;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 205;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8126464) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 206;
	                this.match(twine_harloweParser.WS);
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 212;
	            this.expr(0);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 233;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ConditionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, twine_harloweParser.RULE_condition);
	                this.state = 216;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 220;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 217;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 222;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 223;
	                _la = this._input.LA(1);
	                if(!(_la===16 || _la===17)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 227;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 224;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 229;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 230;
	                this.condition(4); 
	            }
	            this.state = 235;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, twine_harloweParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 237;
	            this.match(twine_harloweParser.LPAR);
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 238;
	                this.match(twine_harloweParser.WS);
	                this.state = 243;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 244;
	            this.expr(0);
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 245;
	                this.match(twine_harloweParser.WS);
	                this.state = 250;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 251;
	            this.match(twine_harloweParser.RPAR);
	            break;
	        case 5:
	        case 7:
	        case 8:
	        case 24:
	        case 30:
	            this.state = 253;
	            this.literal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, twine_harloweParser.RULE_expr);
	                this.state = 256;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 260;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 257;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 262;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 263;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 125829120) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 267;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 264;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 269;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 270;
	                this.expr(4); 
	            }
	            this.state = 275;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, twine_harloweParser.RULE_value);
	    try {
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.array();
	            break;
	        case 5:
	        case 7:
	        case 8:
	        case 24:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.literal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, twine_harloweParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(twine_harloweParser.LPAR);
	        this.state = 281;
	        this.match(twine_harloweParser.ARR_START);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 282;
	            this.match(twine_harloweParser.WS);
	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 288;
	        this.expr(0);
	        this.state = 305;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 292;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 289;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 294;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 295;
	                this.match(twine_harloweParser.COMMA);
	                this.state = 299;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===28) {
	                    this.state = 296;
	                    this.match(twine_harloweParser.WS);
	                    this.state = 301;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 302;
	                this.expr(0); 
	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	        }

	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 308;
	            this.match(twine_harloweParser.WS);
	            this.state = 313;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 314;
	        this.match(twine_harloweParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, twine_harloweParser.RULE_literal);
	    try {
	        this.state = 319;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 24:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.num();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 317;
	            this.string();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, twine_harloweParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(twine_harloweParser.DS);
	        this.state = 323; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 322;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610612800) !== 0))) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 325; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,41, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, twine_harloweParser.RULE_num);
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.floating();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.integer();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floating() {
	    let localctx = new FloatingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, twine_harloweParser.RULE_floating);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 331;
	            this.match(twine_harloweParser.MINUS);
	        }

	        this.state = 337;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 334;
	            this.match(twine_harloweParser.DIGIT);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 340;
	        this.match(twine_harloweParser.DOT);
	        this.state = 342; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 341;
	        		this.match(twine_harloweParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 344; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,45, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, twine_harloweParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 346;
	            this.match(twine_harloweParser.MINUS);
	        }

	        this.state = 350; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 349;
	        		this.match(twine_harloweParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 352; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,47, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, twine_harloweParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(twine_harloweParser.QUOTE);
	        this.state = 358;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967262) !== 0)) {
	            this.state = 355;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===5) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 361;
	        this.match(twine_harloweParser.QUOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, twine_harloweParser.RULE_link);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.match(twine_harloweParser.LBRACK);
	        this.state = 364;
	        this.match(twine_harloweParser.LBRACK);
	        this.state = 368;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        if(la_===1) {
	            this.state = 365;
	            this.text();
	            this.state = 366;
	            this.match(twine_harloweParser.ARROW);

	        }
	        this.state = 370;
	        this.text();
	        this.state = 371;
	        this.match(twine_harloweParser.RBRACK);
	        this.state = 372;
	        this.match(twine_harloweParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, twine_harloweParser.RULE_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 374;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4148380664) !== 0))) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 377; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

twine_harloweParser.EOF = antlr4.Token.EOF;
twine_harloweParser.LBRACK = 1;
twine_harloweParser.RBRACK = 2;
twine_harloweParser.LPAR = 3;
twine_harloweParser.RPAR = 4;
twine_harloweParser.QUOTE = 5;
twine_harloweParser.UNDERSCORE = 6;
twine_harloweParser.DS = 7;
twine_harloweParser.DOT = 8;
twine_harloweParser.COMMA = 9;
twine_harloweParser.IF = 10;
twine_harloweParser.ELSEIF = 11;
twine_harloweParser.ELSE = 12;
twine_harloweParser.SET = 13;
twine_harloweParser.TO = 14;
twine_harloweParser.ARR_START = 15;
twine_harloweParser.AND = 16;
twine_harloweParser.OR = 17;
twine_harloweParser.GT = 18;
twine_harloweParser.LT = 19;
twine_harloweParser.GE = 20;
twine_harloweParser.LE = 21;
twine_harloweParser.IS = 22;
twine_harloweParser.PLUS = 23;
twine_harloweParser.MINUS = 24;
twine_harloweParser.ASTERIK = 25;
twine_harloweParser.FSLASH = 26;
twine_harloweParser.ARROW = 27;
twine_harloweParser.WS = 28;
twine_harloweParser.ALPHA = 29;
twine_harloweParser.DIGIT = 30;
twine_harloweParser.ALL_ELSE = 31;

twine_harloweParser.RULE_passage = 0;
twine_harloweParser.RULE_stmt = 1;
twine_harloweParser.RULE_conditional_block = 2;
twine_harloweParser.RULE_ifblock = 3;
twine_harloweParser.RULE_elseifblock = 4;
twine_harloweParser.RULE_elseblock = 5;
twine_harloweParser.RULE_set = 6;
twine_harloweParser.RULE_condition = 7;
twine_harloweParser.RULE_expr = 8;
twine_harloweParser.RULE_value = 9;
twine_harloweParser.RULE_array = 10;
twine_harloweParser.RULE_literal = 11;
twine_harloweParser.RULE_variable = 12;
twine_harloweParser.RULE_num = 13;
twine_harloweParser.RULE_floating = 14;
twine_harloweParser.RULE_integer = 15;
twine_harloweParser.RULE_string = 16;
twine_harloweParser.RULE_link = 17;
twine_harloweParser.RULE_text = 18;

class PassageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_passage;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterPassage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitPassage(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitPassage(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_stmt;
    }

	conditional_block() {
	    return this.getTypedRuleContext(Conditional_blockContext,0);
	};

	set() {
	    return this.getTypedRuleContext(SetContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Conditional_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_conditional_block;
    }

	ifblock() {
	    return this.getTypedRuleContext(IfblockContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	elseifblock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseifblockContext);
	    } else {
	        return this.getTypedRuleContext(ElseifblockContext,i);
	    }
	};

	elseblock() {
	    return this.getTypedRuleContext(ElseblockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterConditional_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitConditional_block(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitConditional_block(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_ifblock;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	IF() {
	    return this.getToken(twine_harloweParser.IF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	LBRACK() {
	    return this.getToken(twine_harloweParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(twine_harloweParser.RBRACK, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterIfblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitIfblock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitIfblock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseifblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_elseifblock;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	ELSEIF() {
	    return this.getToken(twine_harloweParser.ELSEIF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	LBRACK() {
	    return this.getToken(twine_harloweParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(twine_harloweParser.RBRACK, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterElseifblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitElseifblock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitElseifblock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_elseblock;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	ELSE() {
	    return this.getToken(twine_harloweParser.ELSE, 0);
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	LBRACK() {
	    return this.getToken(twine_harloweParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(twine_harloweParser.RBRACK, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterElseblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitElseblock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitElseblock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_set;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	SET() {
	    return this.getToken(twine_harloweParser.SET, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	TO() {
	    return this.getToken(twine_harloweParser.TO, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_condition;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	IS() {
	    return this.getToken(twine_harloweParser.IS, 0);
	};

	GT() {
	    return this.getToken(twine_harloweParser.GT, 0);
	};

	LT() {
	    return this.getToken(twine_harloweParser.LT, 0);
	};

	GE() {
	    return this.getToken(twine_harloweParser.GE, 0);
	};

	LE() {
	    return this.getToken(twine_harloweParser.LE, 0);
	};

	AND() {
	    return this.getToken(twine_harloweParser.AND, 0);
	};

	OR() {
	    return this.getToken(twine_harloweParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_expr;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	PLUS() {
	    return this.getToken(twine_harloweParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(twine_harloweParser.MINUS, 0);
	};

	ASTERIK() {
	    return this.getToken(twine_harloweParser.ASTERIK, 0);
	};

	FSLASH() {
	    return this.getToken(twine_harloweParser.FSLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_value;
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_array;
    }

	LPAR() {
	    return this.getToken(twine_harloweParser.LPAR, 0);
	};

	ARR_START() {
	    return this.getToken(twine_harloweParser.ARR_START, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(twine_harloweParser.RPAR, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.COMMA);
	    } else {
	        return this.getToken(twine_harloweParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_literal;
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_variable;
    }

	DS() {
	    return this.getToken(twine_harloweParser.DS, 0);
	};

	ALPHA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.ALPHA);
	    } else {
	        return this.getToken(twine_harloweParser.ALPHA, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DIGIT);
	    } else {
	        return this.getToken(twine_harloweParser.DIGIT, i);
	    }
	};


	UNDERSCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.UNDERSCORE);
	    } else {
	        return this.getToken(twine_harloweParser.UNDERSCORE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_num;
    }

	floating() {
	    return this.getTypedRuleContext(FloatingContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FloatingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_floating;
    }

	DOT() {
	    return this.getToken(twine_harloweParser.DOT, 0);
	};

	MINUS() {
	    return this.getToken(twine_harloweParser.MINUS, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DIGIT);
	    } else {
	        return this.getToken(twine_harloweParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterFloating(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitFloating(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitFloating(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_integer;
    }

	MINUS() {
	    return this.getToken(twine_harloweParser.MINUS, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DIGIT);
	    } else {
	        return this.getToken(twine_harloweParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitInteger(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_string;
    }

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.QUOTE);
	    } else {
	        return this.getToken(twine_harloweParser.QUOTE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_link;
    }

	LBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.LBRACK);
	    } else {
	        return this.getToken(twine_harloweParser.LBRACK, i);
	    }
	};


	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	RBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.RBRACK);
	    } else {
	        return this.getToken(twine_harloweParser.RBRACK, i);
	    }
	};


	ARROW() {
	    return this.getToken(twine_harloweParser.ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitLink(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitLink(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = twine_harloweParser.RULE_text;
    }

	ALL_ELSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.ALL_ELSE);
	    } else {
	        return this.getToken(twine_harloweParser.ALL_ELSE, i);
	    }
	};


	ALPHA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.ALPHA);
	    } else {
	        return this.getToken(twine_harloweParser.ALPHA, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DIGIT);
	    } else {
	        return this.getToken(twine_harloweParser.DIGIT, i);
	    }
	};


	LPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.LPAR);
	    } else {
	        return this.getToken(twine_harloweParser.LPAR, i);
	    }
	};


	RPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.RPAR);
	    } else {
	        return this.getToken(twine_harloweParser.RPAR, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DOT);
	    } else {
	        return this.getToken(twine_harloweParser.DOT, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.COMMA);
	    } else {
	        return this.getToken(twine_harloweParser.COMMA, i);
	    }
	};


	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.QUOTE);
	    } else {
	        return this.getToken(twine_harloweParser.QUOTE, i);
	    }
	};


	TO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.TO);
	    } else {
	        return this.getToken(twine_harloweParser.TO, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.MINUS);
	    } else {
	        return this.getToken(twine_harloweParser.MINUS, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.AND);
	    } else {
	        return this.getToken(twine_harloweParser.AND, i);
	    }
	};


	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.OR);
	    } else {
	        return this.getToken(twine_harloweParser.OR, i);
	    }
	};


	IS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.IS);
	    } else {
	        return this.getToken(twine_harloweParser.IS, i);
	    }
	};


	UNDERSCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.UNDERSCORE);
	    } else {
	        return this.getToken(twine_harloweParser.UNDERSCORE, i);
	    }
	};


	DS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.DS);
	    } else {
	        return this.getToken(twine_harloweParser.DS, i);
	    }
	};


	ASTERIK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.ASTERIK);
	    } else {
	        return this.getToken(twine_harloweParser.ASTERIK, i);
	    }
	};


	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.FSLASH);
	    } else {
	        return this.getToken(twine_harloweParser.FSLASH, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(twine_harloweParser.WS);
	    } else {
	        return this.getToken(twine_harloweParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof twine_harloweListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof twine_harloweVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




twine_harloweParser.PassageContext = PassageContext; 
twine_harloweParser.StmtContext = StmtContext; 
twine_harloweParser.Conditional_blockContext = Conditional_blockContext; 
twine_harloweParser.IfblockContext = IfblockContext; 
twine_harloweParser.ElseifblockContext = ElseifblockContext; 
twine_harloweParser.ElseblockContext = ElseblockContext; 
twine_harloweParser.SetContext = SetContext; 
twine_harloweParser.ConditionContext = ConditionContext; 
twine_harloweParser.ExprContext = ExprContext; 
twine_harloweParser.ValueContext = ValueContext; 
twine_harloweParser.ArrayContext = ArrayContext; 
twine_harloweParser.LiteralContext = LiteralContext; 
twine_harloweParser.VariableContext = VariableContext; 
twine_harloweParser.NumContext = NumContext; 
twine_harloweParser.FloatingContext = FloatingContext; 
twine_harloweParser.IntegerContext = IntegerContext; 
twine_harloweParser.StringContext = StringContext; 
twine_harloweParser.LinkContext = LinkContext; 
twine_harloweParser.TextContext = TextContext; 
