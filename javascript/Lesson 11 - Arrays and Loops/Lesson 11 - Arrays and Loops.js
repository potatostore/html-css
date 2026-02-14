// 1
const nums = [10,20,30];
console.log(nums);

nums[2] = 99;
console.log(nums);

// 2
function getLastValue(arr){
    return arr[arr.length - 1];
}

console.log(getLastValue(nums));

// 3
function arraySwap(arr){
    let result = arr;
    const temp = result[result.length - 1];
    result[result.length - 1] = result[0];
    result[0] = temp;
    return result;
}

const secondArr = arraySwap(nums);
console.log(secondArr);

// 4
for(let i = 0;i<=10;i+=2){
    console.log(i);
}