// get references to the input field
const registrationInput = document.querySelector(".registrationInput");

const errorText = document.querySelector(".errorText");

// get references to the radio buttons
const radioButton = document.querySelector(".radioButton");

// get reference to where the greeting will be displayed
const registrationsParent = document.querySelector(".registrations-parent");

// get reference to the greeting button
const registrationButton = document.querySelector(".registrationButton");

// get reference to the counter
const registrationsStored = document.querySelector(".registrations-stored");

// get a reference to the reset button
const reset = document.querySelector(".reset")

// make an instance of the greet factory function
let registrationInstance = Registrations();

// make a function to display the greetings
function showRegistrations() {
    // get a reference to the checked radio buttons
    var radioBtn = document.querySelector(".radioButton:checked");

    if (radioBtn) {
        var checkedCity = radioBtn.value;
        //registrationInstance.getRegistrationCity(radioBtn.value);
    }

    registrationInstance.setRegistrationCity(checkedCity);
    registrationInstance.getRegistrationCity();
    registrationInstance.setCity()

    if (registrationInput.value !== "" && radioBtn) {
        registrationsParent.innerHTML = /*registrationInstance.getCity() +*/ registrationInput.value.slice(0).toUpperCase() //+ registrationInput.value.slice(1);
        registrationsParent.style.color = "black"

    }

    // prompt usser to enter a valid name with no numbers or characters
    if (!registrationInput.value.match(/[a-zA-Z]/ig)) {
        errorText.innerHTML = "Please enter valid registration"
        errorText.style.color = "red"

        setTimeout(() => {
            errorText.innerHTML = ""
        }, 3000);
    }

    // prompt user to enter a name if they havent
    if (registrationInput.value === "") {
        errorText.innerHTML = "Enter a registration";
        errorText.style.color = "red"

        setTimeout(() => {
            errorText.innerHTML = ""
        }, 3000);
    }

    // prompt user to select a language if they havent
    if (!radioBtn) {
        errorText.innerHTML = "Select a city";
        errorText
        .style.color = "red";

        setTimeout(() => {
            errorText.innerHTML = ""
        }, 3000);
    }
}

  //initialize registrations to equal local storage
  if (localStorage["registrations"]) {
    registrations = localStorage["registrations"]

    let createdElem = document.createElement('li')
    registrationsParent.appendChild(createdElem)
    createdElem.innerHTML = localStorage
    registrationInstance.setEnteredRegistrations('li')
    registrationsParent.innerHTML = registrations
}

// function counterIncrease() {
    
//     let count = Number(localStorage.getItem("counter")) || 0;
//     count ++

//     localStorage.setItem("counter", count);
//     // display the local storage value
//     registrationsStored.innerHTML = localStorage.getItem("counter");

//     // initialize registrations to an empty array
//     let registrations = [];
    
//     if (localStorage.getItem("counter") == NaN ) {
//         localStorage.setItem("counter", 0)
//     }

//     if (localStorage.getItem("registrations") === null) {
//         localStorage.setItem("registrations", [])
//     }
// }


// click handler for displaying the greetings
registrationButton.addEventListener("click", function() {

    //radioBtn = document.querySelector(".radioButton:checked");

    var registrations = [].concat(localStorage.getItem("registrations").split(","))

    registrationInstance.setEnteredRegistrations(registrations)
    registrationInstance.storedRegistrations(registrationInput.value);

    if (registrationInstance.getstoredRegistrations() != "" && !registrations.includes(registrationInstance.getstoredRegistrations()) && registrationInput.value.match(/[a-zA-Z]/ig) && document.querySelector(".radioButton:checked"))  {
        localStorage.setItem("registrations", registrationInstance.exisitingRegistrations())
       // counterIncrease();
    }

    showRegistrations();

    setTimeout(() => {
        registrationsParent.innerHTML = ""
    }, 3000);

    // document.querySelector(".radioButton:uncheck")
    radioBtn = document.querySelector(".radioButton:checked").checked = false;
});

// click handler for reset button
reset.addEventListener("click", function() {
    localStorage.setItem("registrations", [])
    localStorage.setItem("counter", 0)
    registrationsStored.innerHTML = localStorage["counter"]
    errorText.innerHTML = "Counter has been reset!"
    errorText.style.color = "green";

    registrationsParent.innerHTML = ""

    setTimeout(() => {
        errorText.innerHTML = ""
    }, 3000);           

})
