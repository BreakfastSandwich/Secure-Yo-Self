
// pulling the value of the slider from the html page
    const howManySliderElement = document.getElementById('howManySlider');
// pulling the value of the num field from the html page
    const howManyNumElement = document.getElementById('howManyNum');
// pulling the value of checkbox on the html page
    const specCharsElement = document.getElementById('specChars');
// const specChars = specCharsElement
    const upperCharsElement = document.getElementById('upperChars');
// const upperChars = upperCharsElement.value
    const numsElement = document.getElementById('nums');
// const nums = numsElement.value
// targeting the submit button
    const generate = document.getElementById("submit");
// targeting the "Password Output" text in the html
    const passwordPrint = document.getElementById('passwordPrint');



console.log(specCharsElement.value);



// creating event listeners for both the slider and numbers input
    howManyNumElement.addEventListener('input', syncHowMany);
    howManySliderElement.addEventListener('input', syncHowMany);


// setting charamount value to sync with user input
    let charAmount = 8

// creating function to sync the slider and numbers on the html side
    function syncHowMany(s) {
    const value = s.target.value
    howManySliderElement.value = value
    howManyNumElement.value = value
    charAmount = value
    };

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
// console.log(String.fromCharCode(...charCodes))

    

// stopping the "generate Password" button from submitting the form and refreshing page 
// init function triggers the password generation and sets password display

    function init(e) {
    
    const password = generatePassword()
    passwordPrint.textContent = password
    console.log(password)

    console.log(charAmount)
    
    };







// function creats the password array
    function generatePassword() {

// create variable to use as the array. starting with lower case chars as a default
    let charCodes = LOWERCASE

// if Uppercase has been selected concat those values to the available char array
    if (upperCharsElement.checked) {
        charCodes = charCodes.concat(UPPERCASE)
    }

// if Numbers have been selected concat those values to the available char array
    if (numsElement.checked) {
        charCodes = charCodes.concat(NUMBERS)
    }

// if Special Chars have been selected concat those values to the available char array
    if (specCharsElement.checked) {
        charCodes = charCodes.concat(SPECIAL)
    };
    
    // checking array integrity
// console.log(charCodes)
// console.log(charAmount)

// using for loop and math floor/random to generated and fill in the array from the concat'd charCodes list
    const passwordChars = []
    for (let i = 0; i < charAmount; i++) {
console.log(String.fromCharCode(...charCodes))
        
    const char = charCodes[Math.floor(Math.random() * charCodes.length)]   
console.log(char)

 // adding the random char to the array, using the String.fromCharCode to convert the ASCII code back to lettering
     passwordChars.push(String.fromCharCode( char))  
        
    };

// adding to an empty string
    
    return passwordChars.join('')

    };

// triggering the series of functions with the click of the generate password button
    generate.addEventListener('click', init);

