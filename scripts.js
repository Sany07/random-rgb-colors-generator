
window.onload = () => {
	upDateColor();
};

let geButton =document.getElementById('ge-button')
let colorPalate = document.getElementById('rgb-Color')
let rgbColorCode = document.getElementById('rgb-color-code')
let haxColorCode = document.getElementById('hax-color-code')
let rgbCopyButton = document.getElementById('rgb-copy-button')
let haxCopyButton = document.getElementById('hax-copy-button')

geButton.addEventListener('click', function () {
        upDateColor();
        if(RgbCopyButton.innerText !='Copy'){
            RgbCopyButton.innerText ='Copy';
        }

    });
copyButton.addEventListener('click', function () {
   navigator.clipboard.writeText(rgbColorCode.value);
   rgbCopyButton.innerText ='Copied';

});

function upDateColor(){
    let rgbCode = generateColor()[0];
    let haxCode = generateColor()[1];
    console.log(rgbCode);
    console.log(haxCode);
    colorPalate.style.backgroundColor  = rgbCode;
    rgbColorCode.value=rgbCode;
    }
function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgbCode = `rgb(${red},${green},${blue})`;
    
    // convet rgb to hax
    const haxCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    return [rgbCode,haxCode];
}

