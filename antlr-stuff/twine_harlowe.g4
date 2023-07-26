grammar twine_harlowe;

passage : stmt+;

stmt: conditional_block | set | variable | link | text;

conditional_block : ifblock WS* elseifblock* WS* elseblock? ;

ifblock : LPAR IF WS* condition WS* RPAR WS* LBRACK stmt* RBRACK;
elseifblock : LPAR ELSEIF WS* condition WS* RPAR WS* LBRACK stmt* RBRACK;
elseblock : LPAR ELSE RPAR WS* LBRACK stmt* RBRACK;

set : LPAR SET WS* variable WS+ TO WS+ value WS* RPAR;

condition : condition WS* (AND | OR) WS* condition
            | LPAR  WS* condition  WS* RPAR
            | expr WS* (IS | GT | LT | GE | LE) WS* expr 
            ;

expr  : expr WS* (PLUS | MINUS | ASTERIK | FSLASH) WS* expr | LPAR WS* expr WS* RPAR | literal;

value: array | literal;

array : LPAR ARR_START WS* expr ( WS* COMMA WS* expr )* WS* RPAR; 
literal :  num | string | variable;

variable : DS (ALPHA | DIGIT | UNDERSCORE)+ ;

num : floating | integer ;

floating : MINUS? DIGIT* DOT DIGIT+ ;
integer : MINUS? DIGIT+ ;
string : QUOTE ~(QUOTE)* QUOTE ;

link: LBRACK LBRACK ( text ARROW)? text RBRACK RBRACK;

text: (ALL_ELSE | ALPHA | DIGIT | LPAR | RPAR | DOT | COMMA | QUOTE | TO | MINUS | AND | OR | IS | UNDERSCORE | DS | ASTERIK | FSLASH | WS)+;

// LEXER
LBRACK: '[';
RBRACK: ']';
LPAR: '(';
RPAR: ')';
QUOTE: '"';
UNDERSCORE: '_';
DS: '$';
DOT: '.';
COMMA: ',';
IF: 'if:';
ELSEIF: 'else-if:';
ELSE: 'else:';
SET: 'set:';
TO: 'to';
ARR_START: 'a:';
AND: 'and';
OR: 'or';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
IS: 'is';
PLUS: '+';
MINUS: '-';
ASTERIK: '*';
FSLASH: '/';
ARROW: '->';

WS : [ \t\u000C\r\n];

ALPHA: [a-zA-Z];
DIGIT: [0-9];

ALL_ELSE: .;