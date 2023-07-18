# twine-harlowe-compiler
This project is a minimal compiler for Harlowe 3.3.6 and Twine with the integration example in Javascript to support cross-story runtime environments. This was done for a specific project I worked on, but the learning process and development was difficult and incredibly fun for me so I decided to make this it's own repo. It was designed for the purpose of having variables persist beyond one story alone, and having that compilation and runtime environment exist on the client's side. In the example nextjs app I have you can see that as each passage is processed from json, the passage is cleaned, the runtime is updated (and displayed), and the json objects are updated. 
# setup
## ANTLR for grammar and language development
Installing antlr isn't as easy as they make it out to be (or I'm just dumb lol, very possible). Anyways if you're using Windows use [this post](https://stackoverflow.com/questions/41021963/how-to-install-antlr4). For any other device, follow antlr page [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md#windows) and pray. Once installed you can do the following <br><br>
TEST: in the folder `testing` run the script `test.bat` in the cmd prompt. It will generate all java files and compile them in the testing folder. It will then wait for your text and will return the parsed tree after pressing ^Z and then enter (for Windows). In the `.bat` file change the last flag from `-gui` to `-tree` depending on what you want (visual tree or textual tree in terminal). Also depending on your setup change the first line to `antlr` or `antlr4`. I aliased it as `antlr` hence the command is written that way
## running example app
You need `node` and `npm` as well as `npx` the latter two I believe come with `node` when installed. Then in the `js-integration/example` directory run `npm install` and then `npm run dev`. This will start the example app locally on port `3000`. Open `http://localhost:3000/` in your browser.
# integration with js projects
## updating grammar
The language I defined only supports basic things, not even for loops! If you wish to change it, do the following. <br>
[1] Go through ANTLR for grammar and language development setup
[2] run `antlr -Dlanguage=JavaScript -visitor twine_harlowe.g4` from the `antlr-stuff` directory, it will generate many files
[3] Copy over the Lexer, Parser, Listener, and Visitor files to the `antlr-files` directory and modify customListener / customVisitor accordingly with you're new language.
### TODO
- documentation for STEAMLabs on how this all works (docs file)
- add for loops & other macros
- make it plugin-able
