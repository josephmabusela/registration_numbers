// get references to the input field
const registrationInput = document.querySelector(".registrationText");

const errorText = document.querySelector(".errorText");

// get references to the radio buttons
var radioButton = document.querySelector(".radioButton:checked");

// get reference to where the registrations will be displayed
const registrations = document.querySelector(".display");

// get reference to the add button
const addButton = document.querySelector(".addButton");

// get reference to the counter
//const counterElement = document.querySelector(".counter");

// get a reference to the reset button
const resetButton = document.querySelector(".resetButton");

// get/make reference to a parent element of registrations
const registrationsParent = document.querySelector("p");

// make an instance of the registrations factory function
let regInstatnce = Registrations();

// local storage to an empty array from the start
if (localStorage.getItem("registrations") === null) {
    localStorage.setItem("registrations", [])
}

//reference to reg numbers saved in local storage
let registration = localStorage.getItem('registrations').split(',')
//function to display errorText text
function displayError(err) {
    regInstatnce.setErrorText(err)
    errorText.innerHTML = regInstatnce.getErrorText()
    errorText.style.height = '20px'
    setTimeout(() => {
        errorText.innerHTML = ''
        errorText.style.height = '0'

    }, 2000);
}

//load/display items in the local storage
function localStorageItems(){
    let storageList = [].concat(localStorage.getItem('registrations').split(','))
    let newStorageList = [... new Set(storageList)]
    for(let i = 1; i < newStorageList.length; i++){
        if(newStorageList.length != 0){
            let createdItem = document.createElement('h2')
            registrationsParent.appendChild(createdItem)
            createdItem.innerHTML = newStorageList[i]
            regInstatnce.setRegistrationList('h2')
        }
    }
}

function addRegistration() {
    regInstatnce.setRegistrationNumber(registrationInput.value)
    let numbers = regInstatnce.getRegistrationNumber().slice(2, regInstatnce.getRegistrationNumber().length)
    if(registrationInput.value === '') {
        displayError('Enter registration number')
    }else if(!numbers.match('^[0-9]+$') || regInstatnce.getRegistrationNumber().length > 10) {
        displayError('Enter valid registration number')
    }else if(!(regInstatnce.getRegistrationNumber().startsWith('ca') || regInstatnce.getRegistrationNumber().startsWith('cy') || regInstatnce.getRegistrationNumber().startsWith('cj'))) {
        displayError('Enter Cape Town, Bellville or Paarl registration number')
    }else if(registration.includes(regInstatnce.getRegistrationNumber())) {
        displayError('Registration number already exists')
    }else {
        let registrationPlates = registration
        regInstatnce.setTownArray(registrationPlates)
        localStorage.setItem('registrations', regInstatnce.getTownArray())
        let createdItems = document.createElement('h2')
        createdItems.innerHTML = regInstatnce.getRegistrationNumber()
        registrationsParent.appendChild(createdItems)
        regInstatnce.setRegistrationList(createdItems)
    }
}

// make a function to display the registrations
// function removeRegistrations() {
//    if (regInstatnce.getCityRegistration().length === 0) {
//         displayError("Add a registration number")
//     } else {
//         const radioBtn = document.querySelector(".radioButton:checked")
//         if (radioBtn) {
//             let cityName = radioBtn.value;
//             regInstatnce.setCityRegistration(cityName);
//             regInstatnce.setCityCode(regInstatnce.getCityRegistration());

//             console.log(regInstatnce.getRegistrationList());

//             var itemRemoved = regInstatnce.getRegistrationList().filter(item => !item.textContent.startsWith(regInstatnce.getCityCode()));

//             var itemsToStay = regInstatnce.getRegistrationList().filter(item => item.textContent.startsWith(regInstatnce.getCityCode()));

//             if(itemRemoved.length === 0 && regInstatnce.getRegistrationList().length!== 0) {
//                 displayError("Only " + regInstatnce.getCityRegistration() + " plates are here");
//             }
//             for (let i = 0; i < itemRemoved.length; i++) {
//                 let removedItem = itemRemoved[i];
//                 if (regInstatnce.getCityRegistration() !== "All") {
//                     removedItem.classList.add("hide")
//                 }
//             }
//         }
//     }  
// }


// if (localStorage.getItem("counter")) {
//     counterElement.innerHTML = localStorage.getItem("counter")
// }

// function counterIncrease() {
    
//     let count = Number(localStorage.getItem("counter")) || 0;
//     count ++

//     localStorage.setItem("counter", count);
//     // display the local storage value
//     counterElement.innerHTML = localStorage.getItem("counter");

//     // initialize names to an empty array
//     let registrations = [];
    
//     if (localStorage.getItem("counter") == NaN ) {
//         localStorage.setItem("counter", 0)
//     }

//     if (localStorage.getItem("registrations") === null) {
//         localStorage.setItem("registrations", [])
//     }

//     //initialize names to equal local storage
//     if (localStorage["registrations"]) {
//         registrations = localStorage["registrations"]

//         display.innerHTML = registrations
//     }

// }

//event listener to make registrations to remain after reload and error texts
window.addEventListener('load', () => {
    localStorageItems()
})

// click handler for displaying/adding the registrations
addButton.addEventListener("click", function() {
    addRegistration() 
    
    ///displayRemoveButton()
    
    registrationInput.value = ''

    radioButton = document.querySelector(".radioButton:checked").checked = false;
});

// click handler for reset button
resetButton.addEventListener("click", function() {
    localStorage.setItem("registrations", [])
    localStorage.setItem("registrations", 0)
    registrations.innerHTML = localStorage["registrations"]
    errorText.innerHTML = "Registrations have been reset!"
    errorText.style.color = "green";

    registrations.innerHTML = ""

    setTimeout(() => {
        errorText.innerHTML = ""
    }, 3000);           

})