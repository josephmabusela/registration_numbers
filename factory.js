function Registrations() {
    var registrationNumber;
    var registrationsList = [];
    var townArray = [];
    var errorText;
    var cityRegistration;
    var cityCode;

    function setRegistrationNumber(numberplate) {
        registrationNumber = numberplate.toLowerCase().replace(/ /g, "");
    }

    function getRegistrationNumber() {
        return registrationNumber
    }

    function setRegistrationList(item) {
        registrationsList.push(item)
    }

    function getRegistrationList() {
        return registrationsList
    }

    function setTownArray(plateNumbers) {
        townArray = plateNumbers
        townArray.push(plateNumbers)
    }

    function getTownArray() {
        return townArray;
    }

    function setCityRegistration(reg) {
         cityRegistration = reg
     } 

    function getCityRegistration() {
        return cityRegistration
    }

    function setCityCode(city) {
        if(city == "Cape Town") {
            cityCode = "ca"
        }else if(town == "Bellville"){
            cityCode = "cj"
        } else if(town == "Paarl") {
            cityode = "cy"
        } else if(town == 'All'){
            cityCode = "All"
        }
    }

    function getCityCode() {
        return cityCode;
    }

    function removeItem(appendParent, child) {
        appendParent.removeChild(child)
    }

    function setErrorText(err) {
        errorText = err;
    }

    function getErrorText() {
        return errorText
    }

    function exisitingRegistrations() {
        if (!registrationsList.includes(plate)) {
            registrationsList.push(plate);
        }
        return registrationsList
    }


    return {
        setTownArray,
        setRegistrationList,
        getRegistrationList,
        setRegistrationNumber,
        getRegistrationNumber,
        getTownArray,
        setCityRegistration,
        getCityRegistration,
        setCityCode,
        getCityCode,
        removeItem,
        exisitingRegistrations,
        setErrorText,
        getErrorText
    }
}