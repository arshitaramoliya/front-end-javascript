//how to check array is empty or not
arr=[]
if(arr.length===0){
    console.log("arrays is empty")
}else{
    console.log("array's is not empty")
}
// Array destructuring and spread
const nums = [10, 20, 30, 40, 50];
const [first, second, ...rest] = nums;
console.log("First:", first, "Second:", second, "Rest:", rest);

const copy = [...nums, 60, 70];
console.log("Spread copy:", copy);
