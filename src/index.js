
let nonActiveFields = document.querySelectorAll('.userInputs')
for (let i = 0; i < nonActiveFields.length; i++) {
    nonActiveFields[i].addEventListener('beforeinput',()=> {
        console.log('this works')
    })
}
