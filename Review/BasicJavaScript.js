//   1// Define a function max() that takes two numbers as arguments and returns the largest of them.
//  Use the if-then-else construct available in Javascript.

let max=(a,b)=>{
    if(a>b){
        return true;
    }else{
        return false
    }
}
console.log(max(10,15))

// 2,Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  
let maxofthree =(a,b,c)=>{
    if (a > b && a > c){
        return a;
    }else{if( b > c )
        return b  ;
    }
    return c;
}
console.log(maxofthree(1,1,9))

//3.Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

 let isvowel = (arr)=>{
  if(arr.length === 1 &&( "a" === arr || "u" === arr || "i" === arr || "e" === arr || "o" === arr )) {
    return true;
} else {
    false;
}
 }
 console.log(isvowel("a"))

// 4.Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
//  For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
let sums = [1,2,3,4]
let sum =sums.reduce((a,b)=>{
    return (a+b)
})
console.log (sum)

let multiply = [1,2,3,4]
let sum2 =multiply.reduce((a,b)=>{
    return (a*b)
},100)
console.log (sum2)

//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
//  should return the string "ratset gaj".

// let reversed = (word)=>{
//     return word.split("").reversed().join("");
// }
// console.log("tsinat")

function reverse(str){
    let result = "";
    for(let i =0 ; i < str.length;i++){
        result+=str.charAt(str.length-1-i);
    }
    return result
}
    console.log(reverse("tsinat"))


6//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(wordList){
    let maxLength = wordList[0].length;
    for (let i = 1; i < wordList.length; i++){
        if (maxLength < wordList[i].length){
        maxLength = wordList[i].length;
        }
    }
    return maxLength;
    }
    console.log(findLongestWord(["tsinat","sham","rururu"]));

   //7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of
    // words that are longer than i.    
    function filterWords(arrays,k){
          return arrays.filter( word => word.length > k);    
        }
         console.log(filterWords(["test","this","one","kerne"],3));

 // 8 Modify the jsfiddle on the map/filter/reduce
        

        const a = [1,3,5,3,3]; 
const b = a.map((elem, i, array)=> {
  return elem + 3;
},10)
console.log(b.toString() + "<br/>");
const c = a.filter((elem, i, array)=>{
  return elem == 3;});
  console.log(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
  
});
console.log(d.toString())
// document.writeln(d+ "<br/>");

// const d2 = a.find(function(elem) {return elem > 1;}); //3
// const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
// document.writeln(d2+ "<br/>");
// document.writeln(d3);

