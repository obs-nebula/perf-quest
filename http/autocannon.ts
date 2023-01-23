import {server1} from "./server1";
import {server2} from "./server2";
var compare =require("autocannon-compare");
const LoadTestFunction=async()=>{
const Result1=await  server1();
const Result2=await server2();
console.log(compare(Result1,Result2));
}
LoadTestFunction();