grammar twee;

passage : (expr | condition | array | text)+;
// content : conditional_block | set | text | link ;
// conditional_block : if elseif* else? ;

// if : '(if:' condition ')[' content* ']';
// elseif : '(else-if:' condition ')[' content* ']';
// else : '(else:)[' content* ']';

// set : '(set:' variable ' to ' value ')';
// link : '[[' text '->' text ']]';

variable : DS (ALPHANUM | UNDERSCORE)+ ;

condition : condition WS* ('and' | 'or') WS* condition
            | expr WS* ('is' | '<' | '<=' | '>=' | '>') WS* expr 
            ;

expr  : expr WS* ('+' | '-' | '*' | '/') WS* expr | '(' WS* expr WS* ')' | literal;

array : '(a:' WS* expr ( WS* ',' WS* expr )* WS* ')'; 
literal :  num | string | variable;

num : floating | integer ;

floating : '-'? DIGIT* DOT DIGIT+ ;
integer : '-'? DIGIT+ ;
string : QUOTE ~(QUOTE)* QUOTE ;

// very last to catch general text
text: .+? ;

// LEXER
DIGIT: [0-9];
QUOTE: '"';
UNDERSCORE: '_';
ALPHANUM: [a-zA-Z0-9];
DS: '$';
DOT: '.';
WS : [ \t\u000C\r\n];