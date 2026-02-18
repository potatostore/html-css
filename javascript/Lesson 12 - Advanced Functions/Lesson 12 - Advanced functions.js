// 1
function add(a, b){
    console.log(a+b);
}

// 2
function runTwice(fun){
    fun(2,3);
    fun(2,3);
}

runTwice(() => {
    console.log('12b');
});
runTwice(add);

// 3
// const btn = document.querySelector('#one-second-button');
// btn.addEventListener('click', ()=>{
//     setTimeout(()=>{
//         btn.innerHTML = 'Finished'
//     }, 1000);
// });

// 4
const btn = document.querySelector('#one-second-button');
btn.addEventListener('click', ()=>{
    btn.innerHTML = 'Loading...';
    setTimeout(()=>{
        btn.innerHTML = 'Finished'
    }, 1000);
});

// 5
const addBtn = document.querySelector('#add-button');
const addText = document.querySelector('#added-text')
addBtn.addEventListener('click', ()=>{
    addText.innerHTML = 'Added';
    setTimeout(()=>{
        addText.innerHTML = '';
    }, 2000);
});

// 6
const multiply = (a, b)=>{
    return a*b;
}
console.log(multiply(2,3));
console.log(multiply(7,10));

// 7
function countPositive(arr){
    let cnt = 0;
    arr.forEach((num) => {
        if(num > 0){
            cnt++;
        }
    });
    return cnt;
}
const test = [1,-1,5];
console.log(countPositive(test));