const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');

const redValueSpan = document.getElementById('red-value');
const greenValueSpan = document.getElementById('green-value');
const blueValueSpan = document.getElementById('blue-value');

const colorBox = document.getElementById('color-box');
const copyBtn = document.getElementById('copy-btn');
const inputTypeRGBValue = document.getElementById('input-type');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

copyBtn.addEventListener('click', copyRGBValue);

function updateColor(){
    const redValue = redSlider.value;
    const greenValue= greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;
    
    inputTypeRGBValue.textContent = rgbColor;
}

updateColor();

function copyRGBValue(){
    const redValue = redSlider.value;
    const greenValue= greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
    .then(() => {
        alert("RGB value cpoied to Clipboard: " + rgbColor);
    })
    .catch((error) => {
        console.log("Failed to copy RGB values.",error);
    });
}