
const generateButtons = document.getElementById("generateButton");
const QR_image = document.getElementById("QR_image");
const wellcomeText = document.getElementById("wellcomeText");
const wellcomeText2 = document.getElementById("wellcomeText2");
const inputBox= document.getElementById("inputBox");

QR_image.style.display= "none"

generateButtons.addEventListener("click", () =>{

    QRCode.toDataURL(inputBox.value).then(dataURL => {

        QR_image.src = dataURL
        QR_image.style.display= "initial"
        wellcomeText2.innerHTML="Here is your QR-Image"
        wellcomeText.style.display = "none"

    })
})


