// const arr = ['a','b','c','d','e']
// delete arr[1]
// console.log(arr[1]);

// Q: Find the average of num array
// const nums = [59, 53, 23, 1, 67, 84, 10]
// // make total 
// let total;
// let average;
// total = nums.reduce((acc, currentVal) => acc + currentVal, 0)
// average = total / nums.length
// console.log(average);


// Q: uppercase first char in a string arr
const days = ['sunday', 'monday', 'tuesday', 'wednesday']
for(let day of days){
    let firstChar = day.charAt(0).toUpperCase()
    firstChar += day.substring(1)
    // console.log(day.charAt(0).toUpperCase() + substring(1));
    console.log(firstChar);
}