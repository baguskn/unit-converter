const units = [
    {
        title: "Length (Meter/Feet)",
        unit1: "meter",
        unit2: "feet",
        conversion: 3.281,
    },
    {
        title: "Volume (Liter/Gallon)",
        unit1: "liter",
        unit2: "gallon",
        conversion: 0.264,
    },
    {
        title: "Mass (Kilogram/Pound)",
        unit1: "kilogram",
        unit2: "pound",
        conversion: 2.204,
    },
]

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const conversionResults = document.getElementById("conversion-results");

let inputValue = 1;
inputEl.value = inputValue;

render();

function render() {
    let conversionHtml ="";
    for (let i=0; i<units.length; i++) {
        let result1 = inputValue * units[i].conversion;
        let result2 = inputValue / units[i].conversion;
       
        conversionHtml += `
        <div id="results">
            <h2>${units[i].title}</h2>
            <p>${inputValue} ${units[i].unit1}`   
        if (inputValue>1) { conversionHtml += `s`}
        
        conversionHtml += ` = ${result1.toFixed(3)} ${units[i].unit2}`
        if (result1>1) { conversionHtml += `s`}

        conversionHtml += ` | ${inputValue} ${units[i].unit2}`
        if (inputValue>1) { conversionHtml += `s`}

        conversionHtml += ` = ${result2.toFixed(3)} ${units[i].unit1}`
        if (result2>1) { conversionHtml += `s`}

        conversionHtml += `</p>
        </div>`

    }
    conversionResults.innerHTML = conversionHtml
}

convertBtn.addEventListener("click", function() {
    inputValue = inputEl.value;
    render();
})