# twine-harlowe-compiler
This project is a compiler for twee with the integration to support cross-story capabilities. This was done for a specific project I worked on, but the learning process and development was difficult and neat for me so I decided to make this it's own repo.
# setup
Installing antlr isn't as easy as they make it out to be (or I'm just dumb lol, very possible). Anyways if you're using Windows use [this post](https://stackoverflow.com/questions/41021963/how-to-install-antlr4). For any other device, follow antlr page [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md#windows) and pray. Once installed you can do the following <br><br>
TEST: in the folder `testing` run the script `test.bat` in the cmd prompt. It will generate all files and compile them in the testing folder. It will then wait for your text and will return the parsed tree after pressing ^Z and then enter (for windows). In the .bat file change the last flag from -gui to -tree depending on what you want (visual tree or textual tree in terminal). Also depending on your setup change the first line to `antlr` or `antlr4`. I aliased it as `antlr` hence the command is written that way<br><br>
# integration in js
haven't done this yet lol
