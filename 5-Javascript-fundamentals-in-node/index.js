const app = require("./app")
/*
var x = 20
if(x==20){
    console.log("matched")
}
*/

/*
var x = 20;
for (let i = 0; i <=10; i++){
    console.log(i);
}
*/

/*
var arr = [2,3,4,5,6];
// console.log(arr);
console.log(arr[0]);
*/
/*
console.log(app)
console.log(app.x)
console.log(app.y)
console.log(app.z())
*/

const arr = [2,3,4,5,6,8,6,0]
let result = arr.filter((item)=>{
    return item>4
})
console.log(result)