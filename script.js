const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = []
let secondPassword = []

let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")

function getFirstPassword() {
    firstPasswordEl.textContent = ""
    let firstPassword = []
    for (let i = 0; i < 15; i++) {
        if (i < 15) {
            firstPassword.push(characters[getRandomNumber()])
        }
    }
    for (let i = 0; i < firstPassword.length; i++) {
    firstPasswordEl.textContent += firstPassword[i];
    }
}

function getsecondPassword() {
    secondPasswordEl.textContent = ""
    let secondPassword = []
    for (let i = 0; i < 15; i++) {
        if (i < 15) {
            secondPassword.push(characters[getRandomNumber()])
        }
    }
    for (let i = 0; i < secondPassword.length; i++) {
    secondPasswordEl.textContent += secondPassword[i];
    }
}

function generatePasswords() {
    getFirstPassword()
    getsecondPassword()
}


function getRandomNumber() {
    let number = Math.floor(Math.random() * characters.length)
    return number
}
