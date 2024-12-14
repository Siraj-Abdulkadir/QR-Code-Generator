const generateButton = document.getElementById("generateButton");


// import inquirer from 'inquirer';
const inputBox= document.getElementById("inputBox").value;

inputBox.addEventListener('keyup', onclickGenerator)



function onclickGenerator(){
    const inputBox= document.getElementById("inputBox").value;
    console.log(inputBox)
    alert(inputBox)
}


// inquirer
//   inputBox.prompt([
//     {message:"Enter the link for your Qr-Code",
//     name:"URL"}
//   ])
//   .then((answers) => {
//     alert(answers)
//     const url = answers.URL;
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });