
// pulling the value of the slider from the html page
const howManySliderElement = document.getElementById('howManySlider');
// pulling the value of the num field from the html page
const howManyNumElement = document.getElementById('howManyNum');
// pulling the value of checkbox on the html page
const specCharsElement = document.getElementById('specChars');
const upperCharsElement = document.getElementById('upperChars');
const numsElement = document.getElementById('nums');
// targeting the submit button
const generate = document.querySelector("#btn");
// targeting the "Password Output" text in the html
const passwordPrint = document.getElementById('passwordPrint')



console.log(generate)

// let passwordElement = document.querySelector('password');**************

// creating event listeners for both the slider and numbers input
howManyNumElement.addEventListener('input', syncHowMany);
howManySliderElement.addEventListener('input', syncHowMany);

// creating function to sync the slider and numbers on the html side
function syncHowMany(s) {
    const value = s.target.value
    howManySliderElement.value = value
    howManyNumElement.value = value
};

//  create array consts to hold Ascii values for all Char types needed. .concat used to join sections
// of ASCII table to house special chars.  https://www.petefreitag.com/cheatsheets/ascii-codes/ used as template.
const LOWERCASE = ASCIILowToHigh(97, 122)
const UPPERCASE = ASCIILowToHigh(65, 90)
const NUMBERS = ASCIILowToHigh(48, 57)
const SPECIAL = ASCIILowToHigh(33, 47).concat(
    ASCIILowToHigh(58, 64)
).concat(
    ASCIILowToHigh(91, 96)
).concat(
    ASCIILowToHigh(123, 126)
);


// stopping the "generate Password" button from submitting the form and refreshing page 
generate.addEventListener('submit', e => {
    // e.preventdefault()
    // specifying which values ro include in future password array
    const charAmount = howManyNumElement.value
    const includeupper = upperCharsElement.checked
    const includeNum = numsElement.checked
    const includeSpec = specCharsElement.checked
    const password = generatePassword(charAmount, includeupper, includeNum, includeSpec)
    passwordPrint.textContent = password
    console.log(password)
    console.log(charAmount)
    console.log(includeupper)
});


// create function to allow an ascii chart range array for each char type-set

function ASCIILowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}




// creating the password array
function generatePassword(charAmount, includeupper, includeNum, includeSpec) {

    // create variable to use as the array. stating with lower case chars as a default
    let charCodes = LOWERCASE

    // if Uppercase has been selected concat those values to the array
    if (includeupper) {
        charCodes = charCodes.concat(UPPERCASE)
    }

    // if Numbers have been selected concat those values to the array
    if (includeNum) {
        charCodes = charCodes.concat(NUMBERS)
    }

    // if Special Chars have been selected concat those values to the array
    if (includeSpec) {
        charCodes = charCodes.concat(SPECIAL)
    }

    // using for loop and math floor/random to generated and fill in the array from the concat'd charCodes list
    const passwordChars = []
    for (let i = 0; i < charAmount; i++) {
        const char = [Math.floor(Math.random() * charAmount)]

        // adding the random char to the array
        passwordChars.push(string.fromCharCode(char))
    }
    // adding to an empty string
    console.log(passwordChars)
    return passwordChars.join('')

};



// create algo for the array length creation
    // create randomizer to fill in the new array


// create function to convert the Ascii values to Chars
// create print function to log the new password to the html file

