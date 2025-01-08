const http = require('http');

// function dataControl(req,resp){
//     resp.write("<h1>Hello, This is Swechchha Singh</h1>");
//     resp.end();
// }

// write function as arrow function, we can write separately and then call in create server function
const dataControl=(req,resp)=>{
    resp.write("<h1>Hello, This is a Swechchha Singh</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4500)

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Swechchha Singh</h1>");
//     resp.end();
// }).listen(4500)

/*
function test(a){
    return a*10
}

const test = (a)=> a*10
*/