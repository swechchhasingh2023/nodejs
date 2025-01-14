const fs = require('fs');
const path = require('path');

// fs.writeFileSync('apple.txt', 'this is fruit doc')

const dirPath = path.join(__dirname, 'files')
// __dirname - gives current directory path
// console.log(dirPath)

// fs.writeFileSync(dirPath+'/apple1.txt', 'this is fruit doc')

// for (i=0; i<5; i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt', 'this is fruit doc')
// }

// fs.readdir(dirPath, (err, items)=>{
// console.log(items)
// })

fs.readdir(dirPath, (err, file)=>{
    file.forEach((item)=>{
    console.log("file name is", item);
    })
})
