'use strict';
/*
===========================================================================
                 TASK 1
===========================================================================
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
function describeCounty(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;

    return description;
}

const myCountry = describeCounty("Kenya", 48, "Nairobi");
console.log(myCountry);
const country1 = describeCounty("Uganda", 25, "Kampala");
console.log(country1);
const country2 = describeCounty("Tanzania", 30, "Dodoma");
console.log(country2);

/*
===========================================================================
                 TASK 
===========================================================================

*/