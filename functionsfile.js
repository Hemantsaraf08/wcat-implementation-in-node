let fs=require("fs");
function isFileorNot(dirpath){
    return fs.existsSync(dirpath)&&fs.lstatSync(dirpath).isFile();
}
function numberallline(allfilecontent){
    let textarr=allfilecontent.split("\r\n");
    let num=1;
    for(let i=0;i<textarr.length-1;i++){
        textarr[i]=`${num} ${textarr[i]}`
        num++;
    }   
    let newString=textarr.join("\r\n");
    return newString;
}
function numbernonemptylines(allfilecontent){
    let textarr=allfilecontent.split("\r\n");
    let num=1;
    for(let i=0;i<textarr.length;i++){
        if(textarr[i]!=""){
            textarr[i]=`${num} ${textarr[i]}`
            num++;
        }
    }   
    let newString=textarr.join("\r\n");
    return newString;
}

module.exports={
    validfilecheck: isFileorNot,
    numberallline: numberallline,
    numbernonemptylines:numbernonemptylines
}