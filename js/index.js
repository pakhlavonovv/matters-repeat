// 1 misol

// function getInitialOdds(n) {
//     let odds = [];
//     for (let i = 0; i < n; i++) {
//         odds.push(2 * i + 1);
//     }
//     return odds;
// }

// console.log(getInitialOdds(3)); 

// 2 misol

// const word = prompt("Pls enter the word!") .toLowerCase();
// function checkVowels(word) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     for (const letter of word) {
//         if (vowels.includes(letter)) {
//             console.log(`${letter} - unli harf`);
//         } else {
//             console.log(`${letter} - undosh harf`);
//         }
//     }
// }
// checkVowels(word);

// 3 misol (ustoz shu savolga yaxshi tushunmadim)

// let arr = [1, 3, 2, 0, 4, 5]
// function findMaxNum (nums){
//     let max = nums[0]
//     for(let i in nums){
//         if(max < arr[i]){
//             console.log(arr[i])
//             max = arr[i]
//         }
//     }
//     arr.sort((a, b) => b - a);
//     console.log(`bu eng katta son: ${max}`)
// }
// findMaxNum(arr)

// 4 misol

// function findA(word){
//     let count = 0
//     for(let i in word){
//         if(word[i].toLowerCase() == 'a'){
//             count++
//         }
//     }
//     return (`Bu so'zda 'a' xarfi ${count} marta ishtrok etgan`)
// }
// console.log(findA('Paxlavonov Abdullox'))

// 5 misol (Ustoz shu savolga qanday yechim bor? chiqara olmadim)

// let arr = [2,7,11,15]
// let count = 0
// let indices = []
// function findIndexSum(target){
//     for(let i = 0; i < arr.length; i++){
//         if(target % arr[i] === 0){
//             indices.push(i);
//         }
//     }
//     console.log(indices)
// }
// findIndexSum(9)

// 6 misol

// let myArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9];
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     let seen = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (!seen[arr[i]]) {
//             uniqueArray.push(arr[i]);
//             seen[arr[i]] = true;
//         }
//     }

//     return uniqueArray;
// }
// let uniqueArray = removeDuplicates(myArray);
// console.log(uniqueArray);  
