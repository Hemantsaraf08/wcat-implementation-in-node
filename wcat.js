let fs=require("fs");
const { validfilecheck, numberallline,numbernonemptylines } = require("./functionsfile");

let input = process.argv.slice(2);
let options = [];
let files = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] == "-b" || input[i] == "-s" || input[i] == "-n") {
        options.push(input[i]);
    }
    else {
        files.push(input[i]);
    }
}

//first check if all given file paths are valid paths to a file;
for(let i=0;i<files.length;i++){
    if(validfilecheck(files[i])==false){
        console.log("Given file path ", files[i], "is not a valid file path");
        files.splice(i,1);
    }
}

//push contents of files in a string for easy of operations
let allfilecontent="";
for(let i=0;i<files.length;i++){
    allfilecontent+=fs.readFileSync(files[i]);
    allfilecontent+="\r\n"
}

let numberingDone=false;


if(options.indexOf('-s')>=0){
    //remove extra line break;
    let textarr=allfilecontent.split("\r\n");
    for(let i=textarr.length-1;i>=0;i--){
        if(textarr[i]==""){
            textarr.splice(i,1);
        }
    }
    let newstring=textarr.join("\r\n");
    allfilecontent=newstring;
}
if(options.indexOf('-n')>=0&&options.indexOf("-b")>=0){
    //means both given chose first;
    numberingDone=true;
    if(options.indexOf("-n")<options.indexOf("-b")){
        //use -n, all lines numbering
        let ans=numberallline(allfilecontent);
        allfilecontent=ans;
    }else{
        //use -b
        let ans=numbernonemptylines(allfilecontent);
        allfilecontent=ans;
    }
}
if(options.indexOf("-n")>=0&&numberingDone==false){
    //all lines numbering
    numberingDone=true;
    let ans=numberallline(allfilecontent);
    allfilecontent=ans;
}
if(options.indexOf("-b")>=0&&numberingDone==false){
    //use -b, non emptylines are numbered
    numberingDone=true;
    let ans=numbernonemptylines(allfilecontent);
    allfilecontent=ans;
}

console.log(allfilecontent);