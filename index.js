const generateButton = document.getElementById("generateButton");

const linkText = document.getElementById("linkText");

// import inquirer from 'inquirer';
const inputBox= document.getElementById("inputBox").value;

inputBox.addEventListener('keyup', onclickGenerator)



function onclickGenerator(){
    const inputBox= document.getElementById("inputBox").value;
    linkText.innerText = `htpps://${inputBox}`
    linkText.setAttribute('href', inputBox )
    return inputBox;
}


