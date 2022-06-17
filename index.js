const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPassBtn = document.getElementById("genPass-btn")
let firstPassword = document.getElementById("firstPassword-el")
let secondPassword = document.getElementById("secondPassword-el")
let passwordLength = document.getElementById("pwdLength")

let password = ""

genPassBtn.addEventListener("click", function () {
    password = ""
    for (let i = 0; i < passwordLength.value; i++) {
        password += randomSelector()
    }
    firstPassword.value = password
    password = ""
    for (let i = 0; i < passwordLength.value; i++) {
        password += randomSelector()
    }
    secondPassword.value = password
})

function randomSelector() {
    let randChar = Math.floor(Math.random() * characters.length)
    return characters[randChar]
}