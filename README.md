# wCat is a clone of cat command available in bash but not in windows cmd.

<h3>It is used to display or make a copy content of one or more files in the terminal </h3>


<h3>General Syntax:</h3>
wcat [options] [files]

option to remove big line break (-s)

option to add line number to non empty lines (-b)

option to add line numbers to all lines (-n) 

Commands:

1- node wcat.js filepath => displays content of the file in the terminal 

2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.

3- node wcat.js -s filepath => convert big line breaks into a singular line break

4- node wcat -n filepath => give numbering to all the lines 

5- node wcat -b filepath => give numbering to non-empty lines

We can mix and match the options.
<h3>Edge cases:</h3>
1- If file entered is not found then it gives file does not exist error.

2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.
<h3> input (to run use: node wcat.js file1path, file2path, ... command1 command2...)</h3>

![image](https://github.com/Hemantsaraf08/wcat-implementation-in-node/tree/main/input.jpg?raw=true)
<h3> output (for commands "-b" and "-s" only</h3>

![image](https://github.com/Hemantsaraf08/wcat-implementation-in-node/tree/main/output.jpg?raw=true)

