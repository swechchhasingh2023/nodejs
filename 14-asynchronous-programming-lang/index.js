const fs = require('fs');
const path = require('path')

const dirPath =  path.join(__dirname, 'crud')

const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath, 'this is simple text file')

// fs.readFile(filePath, 'utf-8', (err, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `${dirPath}/apple1.txt`, (err)=>{
//     if(!err) console.log("file name is updated")
// })

fs.unlinkSync(`${dirPath}/apple1.txt`)