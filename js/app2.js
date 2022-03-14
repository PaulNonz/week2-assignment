//LEVEL TWO ASSIGNMNET
let unknownStatement= "There is no exercise better for the heart than reaching down and lifting people up"
console.log(unknownStatement)   //Q1
let motherTheresa= "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same --with charity you give love , so don't just give money but reach out your hand instead"
console.log(motherTheresa)      //Q2

// Question 3
let x= '10';
let y= 10;
if (x===y) {
    console.log("true")
} else {
    console.log("false")
}
let z= parseInt(x)
if (z===y) {
    console.log("true")     //Answer: z()=y=10
} else {
    console.log("false")
}

// Question 4
let a='9.8';
let b=10;
if (a===b) {
    console.log("true")
} else {
    console.log("false")
}
let c= parseFloat(a)
console.log(c)
if (c===b) {
    console.log("true")
} else {
    console.log("false")
}
let d= Math.ceil(c)
console.log(d)              //Answer

// Question 5 and 6
let jar="jargon";
let phy="phython";
console.log(jar.includes('on'), phy.includes('on'))
let hopeStatememnt= "I hope this course is not full of jargon."
console.log(hopeStatememnt.includes('jargon'))

// Question7-9
console.log(Math.floor(Math.random()*101))
console.log(Math.ceil(Math.random()*101))
console.log(Math.floor(Math.random()*256))

// Question 10
let string="Jargons"
console.log(string[2], string[4])

// Question 11
let escapeStatement= '\n 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125' 
console.log(escapeStatement)

// Question 12
let newWord2= "You cannot end a sentence with because because because is a conjuction"
let sliceNewWord= newWord2.substr(30,24)
console.log(sliceNewWord)





