function Registrations() {
    var registrationList = [];
    var plateNum;
    var city;
    var plate;

    function setRegistrationCity(numberplate) {
        city = numberplate
    }

    function getRegistrationCity() {
        return city
    }

    function setCity() {
        if (getRegistrationCity() === "cape town") {
            plate =  "CA"
        }

        if (getRegistrationCity() === "paarl") {
            plate =  "CY"
        }

        if (getRegistrationCity() === "belville") {
            plate =  "CJ";
        }
    }

    function getCity() {

        return plate
    }

    function storedRegistrations(str) {
       plateNum = str.toUpperCase() //+ str.substring(2).toLowerCase();
    }

    function getstoredRegistrations() {
        return plateNum;
    }

    function setEnteredRegistrations(userInput) {
        registrationList = userInput
    }

    function getEnteredRegistrations() {
        return registrationList
    }

    function exisitingRegistrations() {
        if (!registrationList.includes(plateNum)) {
            registrationList.push(plateNum);
        }
        return registrationList
    }


    return {
        storedRegistrations,
        setRegistrationCity,
        getstoredRegistrations,
        getRegistrationCity,
        getEnteredRegistrations,
        setEnteredRegistrations,
        exisitingRegistrations,
        setCity,
        getCity
    }
}