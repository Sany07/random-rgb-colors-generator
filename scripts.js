
window.onload = () => {
	upDateColor();
};

let geButton =document.getElementById('ge-button')
let colorPalate = document.getElementById('rgb-Color')
let colorCode = document.getElementById('color-code')
let copyButton = document.getElementById('copy-button')

geButton.addEventListener('click', function () {
        upDateColor();
        if(copyButton.innerText !='Copy'){
            copyButton.innerText ='Copy';
        }

    });

function upDateColor(){
    let rgbColor = generateColor();
    colorPalate.style.backgroundColor  = rgbColor;
    colorCode.value=rgbColor;
    }
function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}