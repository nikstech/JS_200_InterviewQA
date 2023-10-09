// Q: 1 reverse 321 test

// (function data(num){
//   let numNew = num.toString().split("").reverse().join('')
//   if(numNew.endsWith("-")){
//     numNew = parseInt(numNew) 
//   }
//   else {
//     numNew = parseInt(numNew)      
//   }
//   console.log(typeof numNew + " " + numNew )    

// })(-321) 

/* Q:2: Find unique num */

// let num1 = [1,2,2,1,3]
// let num2 = [1,4,3]

// let checkUniq = num1.filter(el=>{
//  return num2.includes(el)
// })
// checkUniq = [...new Set(checkUniq)]

// console.log(checkUniq)

// Q:3.1: Find the Sum with reduce Method
// const arr = [1, 2, 3, 4, 5];
// let initVal = 0;
// const sum = arr.reduce((acum, currVal) => acum + currVal , initVal
//  );
// console.log(sum);

// Q:3.2: Find the Sum of added Item of obj by reduce Method
// const cartItems = [
//   {
//     itemName: "Js Course",
//     itemPrice: 2000
//   },
//   {
//     itemName: "C Course",
//     itemPrice: 3000
//   },
//   {
//     itemName: "C++ Course",
//     itemPrice: 5000
//   },
//   {
//     itemName: "HTML Course",
//     itemPrice: 1000
//   }
// ];

// let priceToPay = cartItems.reduce((acc, item) => acc + item.itemPrice, 0);
// console.log(priceToPay);

// Q:4: Find the duplicate el

// const duplicateArr = [14, 23, 6, 6, 14, 56, 84, 14];
// const duplicate = duplicateArr.filter(
//   (el, index, arr) => arr.indexOf(el) == index
// );
// console.log(duplicate);

// Q:5 Find the duplicate counts
// const months = ["feb", "Jan", "March", "feb", "Jan"];
// let res = months.reduce((obj, month) => {
//  if(obj[month] == undefined){
//   obj[month] = 1
//   return obj
//  }
//  else{
//   obj[month]++
//   return obj
//  }
// }, {});
// console.log(res)

// Q:6 Check given numnber is a Integer

// let num = "nik";
// console.log(isNaN(num));

// Q:7 number sort in gretest order

// const unSortedArr = [10, 4, 29, 34, 63, 3, 1];
// // let sortedArr = unSortedArr.sort(check);
// let sortedArr = unSortedArr.sort((a,b)=>{
//     return a-b
// //   console.log(a-b) 
// }); 
// console.log("sortedArr");  
// function check(a,b) {                                                  
// // console.log(a);    
//   if(a<b){
//     return -1 
//   } 
//   else if(a>b){ 
//     return 1
//   }
//   else{ 
//     return 0
//   } 
// } 
 
// Q:8:  Find unique no in array
// const numLists = [21,43,2,44,21,58,34,2,58]
// let res = numLists.filter((num,id,arr)=>{
//  return  arr.indexOf(num)!== id
// })
// console.log(res);


// Q:9 
// console.log(false>-3); 
// console.log(false == 0); 
// console.log(false == '0'); 
// console.log(false === '0');
 
// Q: 10
// var emID = '123abc';
// (function(){
//   let emID = 1;
//   console.log(emID); 
// })()

// Q: 11 
// console.log(1<2<3);
// console.log(3>2>1);

// let a = true
// console.log(Object.values(a));
// ------------------------------------
//  console.log("sqwe")

// Q: 11 Delet an mid ele and check is It emty or not with lenght 
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


// Q: 17 print 1 - 10 with loop by giving array list
// const array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// } 

// Q: 17 print 1 - 10 without giving array list and loop

const counter = (n) => {
    if(n===0){
        return 'end'
    }
    console.log(n);
    counter(n-1)
}
console.log("St");
counter(10)
console.log("End");