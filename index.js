const generateButton = document.getElementById("generateButton");

const h2Text = document.getElementById("h2Text");

// import inquirer from 'inquirer';
const inputBox= document.getElementById("inputBox").value;

inputBox.addEventListener('keyup', onclickGenerator)



function onclickGenerator(){
    const inputBox= document.getElementById("inputBox").value;
    console.log(inputBox)
    h2Text.innerHTML = inputBox;
    return inputBox;
}


