import './style.css'
import {testEmail, testCountry, testZipCode, testPassword, confirmPassword, finalValidation} from "./validations"

let email = document.getElementById("userEmail")
email.addEventListener('input', ()=> {
    testEmail(email)
})
let country = document.getElementById("userCountry")
country.addEventListener("change",()=>{
    testCountry(country)
})
let zipCode = document.getElementById('zipCode')
zipCode.addEventListener("input", ()=>{
    testZipCode(zipCode)
})
let passwordConfirmation = document.getElementById('confirmPassword')
 passwordConfirmation.addEventListener('input', ()=>{
    confirmPassword(passwordConfirmation)
 })
let password = document.getElementById('userPassword')
password.addEventListener('input', ()=>{
    testPassword(password)
})
let submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', finalValidation
)
let myForm = document.getElementById('myForm')
myForm.addEventListener('change', ()=>{
    testEmail(email)
    testCountry(country)
    testZipCode(zipCode)
    testPassword(password)
    confirmPassword(passwordConfirmation)
})


