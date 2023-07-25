// const arr = ['a','b','c','d','e']
// delete arr[1]
// console.log(arr[1]);

// Q: 12 Find the average of num array
// const nums = [59, 53, 23, 1, 67, 84, 10]
// // make total 
// let total;
// let average;
// total = nums.reduce((acc, currentVal) => acc + currentVal, 0)
// average = total / nums.length
// console.log(average);


// Q:13 uppercase first char in a string arr
// const days = ['sunday', 'monday', 'tuesday', 'wednesday']
// for(let day of days){
//     // console.log(day.charAt(0))
//     let firstChar = day.charAt(0).toUpperCase()
//     firstChar += day.substring(1)
//     // console.log(day.charAt(0).toUpperCase() + substring(1));
//     console.log(firstChar);
// }

// Q: 14  Make sentence from  given array
// const sentenceToJoin = ['welcome', 'to', 'the', 'nikstech']
// console.log(sentenceToJoin.join(" "));

// Q: 15 Check if an array ele contains in other array
// const str1 = [1,2,3,4,5,6,7,8] 
// const str2 = [1,2,3] 

// const commanELe = str1.filter((str,id)=>{
//     return str2.includes(str)
// })
// console.log(commanELe);

// Q: 15 Check if an array contains any ele of another array
// const str1 = [1,2,3,4,5,6,7,8] 
// const str2 = [1,22,33] 

// const someR = str1.every(el=>str2.includes(el))
// console.log(someR);


// Q: 16 Check anagram

// let str1 = 'cinema';
// let str2 = 'iceman';
// str1  = str1.toLowerCase()
// str2  = str2.toLowerCase()

// str1 = str1.split('').sort().join('')
// str2 = str2.split('').sort().join('')


// if(str1 === str2){
//     console.log("Ama");
// }
// else{
//     console.log("Ana not");
// }