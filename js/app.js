//LEVEL ONE ASSIGNMNET
// Question 1 and 2: Assigning a variable to an already declared value
let originalVar= "30 Days Of JavaScript";
let declaredVar= " Challenges";
let addedVar= originalVar + declaredVar  //using the addition format
console.log(addedVar)

let declaredVar2 = declaredVar.trim()    //using the template literal method
let tempLitVar = `${originalVar} ${declaredVar2}`
console.log(tempLitVar)

let concatDeclaredVar= originalVar.concat(declaredVar) //using the concat method
console.log(concatDeclaredVar) 

// Question 3: print the length of string
console.log(tempLitVar.length)

// Question 4 and 5: change all string to upper and lower case
console.log(tempLitVar.toUpperCase())
console.log(tempLitVar.toLowerCase())

// Question 6 and 7: Slice out the first word using subtr() and substring()
console.log(tempLitVar.substr(3, 30))       //subtr()
console.log(tempLitVar.substring(3,32))     //substring()
console.log(originalVar.substring(0, 2))    //Question 7

// Question 8: 
console.log(tempLitVar.includes("Script"))

// Question 9 & 10: 
console.log(tempLitVar.split(""))   //split general
console.log(tempLitVar.split(" "))   //split on spacing

// Question 11-16
let socialMedia= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon,"
console.log(socialMedia.split(","))   //Q11
console.log(originalVar.replace("JavaScript", "Python"))  //Q12
console.log(originalVar.charAt(15))          //Q13
console.log(originalVar.charCodeAt(11))          //Q14
console.log(originalVar.indexOf("a"))            //Q15
console.log(originalVar.lastIndexOf("a"))        //Q16

// Question 17-18
let newWord= "You cannot end a sentence with because because because is a conjuction"
console.log(newWord.indexOf("because"))          //Q17
console.log(newWord.lastIndexOf("because"))      //Q18

// Question 19-23
console.log(newWord.search("because"))           //Q19
let NewVar=' 30 Days Of Javascript '
let trimmedNewVar= NewVar.trim()
console.log(trimmedNewVar)                       //Q20
console.log(originalVar.startsWith('30'))        //Q21: true condition if it starts with "30"
console.log(originalVar.endsWith('JavaScript'))  //Q22: true condition if it ends with "30"
console.log(originalVar.match(/a/gi))            //Q23: search for all a's

//  Question 24-25
let firstString= "30 Days of"
let secondString= "JavaScript"
let mergedString= firstString.concat(` ${secondString}`)
console.log(mergedString)                       //Q24
console.log(mergedString.repeat(2))








