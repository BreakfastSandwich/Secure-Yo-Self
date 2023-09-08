
// pulling the value of the slider from the html page
const howManySliderElement = document.getElementById('howManySlider');
// pulling the value of the num field from the html page
const howManyNumElement = document.getElementById('howManyNum');
// pulling the value of checkbox on the html page
const specCharsElement = document.getElementById('specChars')
const upperCharsElement = document.getElementById('upperChars')
const numsElement = document.getElementById('nums')

const generate = document.getElementsByClassName('form')

// creating event listeners for both the slider and numbers input
howManyNumElement.addEventListener('input', syncHowMany);
howManySliderElement.addEventListener('input', syncHowMany);

// stopping the "generate Password" button from submitting the form 
FormData.addEventListener('submit', e=> {
    e.preventdefault()
})


// creating function to sync the slider and numbers on the html side
function syncHowMany (e) {
    const value = e.target.value
    howManySliderElement.value = value
    howManyNumElement.value = value
}




