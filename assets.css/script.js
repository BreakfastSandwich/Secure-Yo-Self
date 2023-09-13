
// // traversing Dom to get the upper form setion so I can disable the display allowing the user to select which wersion they'd like to use
// // based on the script they uncomment.
    var userInput = document.getElementById('switch');
console.log(userInput);
    userInput.setAttribute('style', 'display:none');


//  create array consts to hold Ascii values for all Char types needed. .concat used to join sections
// of ASCII table to house special chars.  https://www.petefreitag.com/cheatsheets/ascii-codes/ used as template.
const LOWERCASE = ASCIILowToHigh(97, 122);
const UPPERCASE = ASCIILowToHigh(65, 90);
const NUMBERS = ASCIILowToHigh(48, 57);
const SPECIAL = ASCIILowToHigh(33, 47).concat(
    ASCIILowToHigh(58, 64)
).concat(
    ASCIILowToHigh(91, 96)
).concat(
    ASCIILowToHigh(123, 126)
);

// create function to allow an ascii chart range array for each char type-set

function ASCIILowToHigh(low, high) {
const array = []
for (let i = low; i <= high; i++) {
    array.push(i)
}
return array
};

// confirming array integrity after ASCII array conversion
console.log(LOWERCASE);




    const password = document.getElementById('passwordPrint');

// display prompt asking user for a number of characters
    var charAmount = prompt("How Many Characters Would You Like?","Min. 8 - Max 128");
console.log (charAmount);

    if (charAmount <=8 || !charAmount >= 128 || charAmount == "Min. 8 - Max 128"){
        alert("Charater amount must be between 8 and 128 characters")
    } else {

// display confirm box asking user if they want Special Characters
    var specCharsElement = confirm("Include Special Characters?")


// display confirm box asking user if they want Uppercase Characters
    var    upperCharsElement = confirm("Include Uppercase Characters?")


// display confirm box asking user if they want Number Characters    
    var    numsElement = confirm("Include Numbers?")

    init()
    };




// confirming array integrity after ASCII array conversion
console.log(LOWERCASE);


    

// stopping the "generate Password" button from submitting the form and refreshing page 
// init function triggers the password generation and sets password display

function init(e) {
    // e.preventdefault()
    const password = generatePassword()
    passwordPrint.textContent = password
console.log(password)
console.log(charAmount)
    
    };





// let charCodes = LOWERCASE

// function creats the password array
function generatePassword() {

    // create variable to use as the array. starting with lower case chars as a default
    let charCodes = LOWERCASE

    // if Uppercase has been selected concat those values to the available char array
    if (upperCharsElement) {
        charCodes = charCodes.concat(UPPERCASE)
    }

    // if Numbers have been selected concat those values to the available char array
    if (numsElement) {
        charCodes = charCodes.concat(NUMBERS)
    }

    // if Special Chars have been selected concat those values to the available char array
    if (specCharsElement) {
        charCodes = charCodes.concat(SPECIAL)
    };
    
    // checking array integrity
console.log(charCodes);
console.log(charAmount);

    // using for loop and math floor/random to generated and fill in the array from the concat'd charCodes list
    const passwordChars = []
    for (let i = 0; i < charAmount; i++) {
console.log(String.fromCharCode(...charCodes))
        
        const char = charCodes[Math.floor(Math.random() * charCodes.length)]   
          console.log(char)

        // adding the random char to the array, using the String.fromCharCode to convert the ASCII code back to lettering
        passwordChars.push(String.fromCharCode(char))  

        // passwordChars.push(char) ****** testing
        
    };

    // adding to an empty string
    
    return passwordChars.join('')

};

// console.log(String.fromCharCode(...charCodes))

// if (!numsElement || numsElement) {
//     init()
    
// }
// triggering the series of functions with the click of the generate password button
// generate.addEventListener('click', init)


