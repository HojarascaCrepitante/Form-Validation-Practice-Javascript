const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
const usRegex = /^(\d{5})?$/;
const argRegex = /^([A-HJ-TP-Z]{1}\d{4}[A-Z]{3}|[a-z]{1}\d{4}[a-hj-tp-z]{3})$/;
const spainRegex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
let countryValue = '';
let password = '';
let isValidEmail = '';
let isValidCountry = '';
let isValidZipCode ='';
let isValidPassword = '';
let isValidPasswordConfirm = '';

function testEmail(x){
    let isValid = emailRegex.test(x.value);
    if(isValid == false){
        x.classList.remove('valid')
        x.classList.add('invalid')
        x.setCustomValidity('Please fill out with a proper email adress')
    }
    if(isValid == true){
        x.classList.remove('invalid')
        x.classList.add('valid')
        x.setCustomValidity('')
    }
    x.reportValidity()
    isValidEmail = x.reportValidity()
}
function testCountry(input){
    if(input.value == 'blank'){
        input.setCustomValidity('You must select a country')
        input.classList.remove('countryValid')
        input.classList.add('countryInvalid')
    }
    else if(input.value !== 'blank'){
        input.setCustomValidity('')
        input.classList.remove('countryInvalid')
        input.classList.add('countryValid')
        countryValue = input.value
        console.log(countryValue)
    }
    input.reportValidity()
    isValidCountry = input.reportValidity()
    
}
function testZipCode(z){
    if(countryValue == 'unitedStates'){
        if(usRegex.test(z.value) == true){
            z.setCustomValidity('')
            z.classList.remove('invalid')
            z.classList.add('valid')
        }
        else {z.setCustomValidity('Please enter a zip code in the proper format')
            z.classList.remove('valid')
            z.classList.add('invalid')
        }
    }
    if(countryValue == 'argentina'){
        if(argRegex.test(z.value) == true){
           z.setCustomValidity('')
           z.classList.remove('invalid')
           z.classList.add('valid')
        }
        else {z.setCustomValidity('Please enter a zip code in the proper format')
            z.classList.remove('valid')
            z.classList.add('invalid')
        }
    }
    if(countryValue == 'spain'){
        if(spainRegex.test(z.value) == true){
            z.setCustomValidity('')
            z.classList.remove('invalid')
            z.classList.add('valid')
        }
        else {z.setCustomValidity('Please enter a zip code in the proper format')
            z.classList.remove('valid')
            z.classList.add('invalid')
        }
    }
    z.reportValidity()
    isValidZipCode = z.reportValidity()
}
function testPassword(pass){
    if(pass.value.length < 8){
        pass.setCustomValidity('Password must be at least 8 characters')
        pass.classList.remove('valid')
        pass.classList.add('invalid')
    }
    else{
        pass.setCustomValidity('')
        pass.classList.remove('invalid')
        pass.classList.add('valid')
        password = pass.value
    }
    pass.reportValidity()
    isValidPassword = pass.reportValidity()
}
function confirmPassword(passConfirmation){
    if(passConfirmation.value !== password){
        passConfirmation.setCustomValidity('Password does not match')
        passConfirmation.classList.remove('valid')
        passConfirmation.classList.add('invalid')
    }
    else {
        passConfirmation.setCustomValidity('')
        passConfirmation.classList.remove('invalid')
        passConfirmation.classList.add('valid')
    }
        passConfirmation.reportValidity()
        isValidPasswordConfirm = passConfirmation.reportValidity()
}
        
function finalValidation(){
    let areAllValid = []
    areAllValid.push(isValidEmail,isValidCountry,isValidZipCode,isValidPassword,isValidPasswordConfirm)
    if(areAllValid.includes(false)){
        alert('First complete the form bruh')
    }
    else{
    alert ('LETTS GO FORM COMPLETE')
    window.location.reload()}
}

   
export  {testEmail, testCountry, testZipCode, testPassword, confirmPassword, finalValidation}