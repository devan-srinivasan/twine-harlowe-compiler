# twee-compiler
This project is a compiler for twee with the integration to support cross-story capabilities. This was done for a specific project I worked on, but the learning process and development was difficult and neat for me so I decided to make this it's own repo.
# setup
Installing antlr isn't as easy as they make it out to be (or I'm just dumb lol, very possible). Anyways if you're using Windows use [this post](https://stackoverflow.com/questions/41021963/how-to-install-antlr4). For any other device, follow antlr page [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md#windows) and pray. Once installed you can do the following <br><br>
TEST: `test.bat` in the cmd prompt will generate all files and compile them. It will then wait for your text and will return the parsed tree after pressing ^Z and then enter (for windows). In the .bat file change the last flag to -tree or -gui depending on what you want. Also depending on your setup change the first line to `antlr` or `antlr4`. <br><br>
# integration in js
haven't done this yet lol
