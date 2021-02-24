/*
===========================================================================
                 Challenge 1
===========================================================================
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😁
*/
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
let bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


/*
===========================================================================
                 Challenge 2
===========================================================================
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK 
*/

weightMark = 78;
heightMark = 1.69;
weightJohn = 92;
heightJohn = 1.95;

bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}


weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}


/*
===========================================================================
                 Challenge 2
===========================================================================
*/


/*
===========================================================================
                 Challenge 2
===========================================================================
*/