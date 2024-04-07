const {writeFile,readFile} =require("node:fs")

function callback(err) {
    if(err) console.log(err)
    else console.log("File has been created succesfully")
}



function creatFileAndWriteToFile() {
    writeFile('message.txt', 'welcome', 'utf8', callback);
   
}

function readFileAndPrint() {
    readFile('files/readfile.txt', (err, data) => {
        if (err) console.log(err)
        else console.log(data.toString());}

    )}

module.exports ={
    creatFileAndWriteToFile,
    readFileAndPrint,
}