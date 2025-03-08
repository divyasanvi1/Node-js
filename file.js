const fs=require("fs");
const os=require("os")

console.log(os.cpus().length)

//sync
//fs.writeFileSync("./test.txt","Hello world")

//async..
//fs.writeFile("./test.txt","Hello world async",(err)=>{})

//sync..
// const result=fs.readFileSync("./contact.txt","utf8")
// console.log(result)

//async
// fs.readFile("./contact.txt","utf8",(err,result)=>{
//     if(err)
//     {
//         console.log("Error",err)
//     }
//     else
//     {
//         console.log(result)
//     }
// })

fs.appendFileSync("./test.txt", new Date().getDate().toString()) // do not overwrite but append data

fs.cpSync("./test.txt","./copy.txt") // copy file
fs.unlinkSync("./copy.txt") // delete file