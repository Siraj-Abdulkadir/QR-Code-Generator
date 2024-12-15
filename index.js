const generateButton = document.getElementById("generateButton");


// import inquirer from 'inquirer';
const inputBox= document.getElementById("inputBox").value;

inputBox.addEventListener('keyup', onclickGenerator)



function onclickGenerator(){
    const inputBox= document.getElementById("inputBox").value;
    console.log(inputBox)
    alert(inputBox)
}
