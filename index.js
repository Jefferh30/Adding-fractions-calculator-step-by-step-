//functions to find the least common multiple
const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
}

const findlcm = (arr, n) => {
    let ans = arr[0];
    for (let i = 1; i < n; i++) ans = (((arr[i] * ans)) / (gcd(arr[i], ans)));
    return ans;
}

//initializing with 2 fractions
let numberFractions = 2;

//shows selected number of fractions
const fractionsNumber = (howMany) => {
    const fraction3 = document.getElementsByClassName("fraction3");
    const fraction4 = document.getElementsByClassName("fraction4");
    const symbolAction2 = document.getElementById("symbol2");
    const symbolAction3 = document.getElementById("symbol3");
    const Button1 = document.getElementById('twoFractions');
    const Button2 = document.getElementById('threeFractions');
    const Button3 = document.getElementById('fourFractions');

    //getting number of fractions
    numberFractions = parseInt(howMany);

    //displaying or hiding fractions and symbols
    fraction3[0].style.display = numberFractions >= 3 ? "block" : "none";
    fraction4[0].style.display = numberFractions === 4 ? "block" : "none";
    symbolAction2.style.display = numberFractions >= 3 ? "block" : "none";
    symbolAction3.style.display = numberFractions === 4 ? "block" : "none";

    //adding or removing a css class on button that selects number of fractions 
    Button1.classList.toggle('button-on', numberFractions === 2);
    Button1.classList.toggle('button-off', numberFractions !== 2);
    Button2.classList.toggle('button-on', numberFractions === 3);
    Button2.classList.toggle('button-off', numberFractions !== 3);
    Button3.classList.toggle('button-on', numberFractions === 4);
    Button3.classList.toggle('button-off', numberFractions !== 4);
}


const addBtn = () => {
    // getting numerators and denominators of the four fractions
    let inputNum1 = parseFloat(document.getElementById("inputNum1").value);
    let inputDen1 = parseFloat(document.getElementById("inputDen1").value);
    let inputNum2 = parseFloat(document.getElementById("inputNum2").value);
    let inputDen2 = parseFloat(document.getElementById("inputDen2").value);
    let inputNum3 = parseFloat(document.getElementById("inputNum3").value);
    let inputDen3 = parseFloat(document.getElementById("inputDen3").value);
    let inputNum4 = parseFloat(document.getElementById("inputNum4").value);
    let inputDen4 = parseFloat(document.getElementById("inputDen4").value);

    // getting the symbols
    let symbol1 = document.getElementById("symbol1").value;
    let symbol2 = document.getElementById("symbol2").value;
    let symbol3 = document.getElementById("symbol3").value;

    let finalAnswer = "";
    let finalSolution = "";
    let simplified = "";

    //When any denominator is 0, there is no solution
    if (inputDen1 === 0 || inputDen2 === 0 || inputDen3 === 0 || inputDen4 === 0) {
        finalSolution = '<p style="color:crimson; text-align:center;">Denominators cannot be 0</p>';
        finalAnswer = "";
    } else {
        let step1 = "";

        //when negative signs in numerator or denominator, show step to simplify them
        if (inputNum2 < 0 || inputDen2 < 0 || inputNum3 < 0 || inputDen3 < 0 || inputNum4 < 0 || inputDen4 < 0) {
            step1 = `<p>We can simplify the negative signs and write the fractions as follows</p>`
        } else {
            step1 = "";
        }

        //moving negative sign in denominator to numerator
        inputNum1 *= inputDen1 < 0 ? -1 : 1;
        inputDen1 = Math.abs(inputDen1);
        inputNum2 *= inputDen2 < 0 ? -1 : 1;
        inputDen2 = Math.abs(inputDen2);
        inputNum3 *= inputDen3 < 0 ? -1 : 1;
        inputDen3 = Math.abs(inputDen3);
        inputNum4 *= inputDen4 < 0 ? -1 : 1;
        inputDen4 = Math.abs(inputDen4);


        //Change signs of numerators and symbols when one is negative
        if (inputNum2 < 0) {
            inputNum2 *= (symbol1 === "+") ? 1 : -1;
            symbol1 = (symbol1 === "+") ? "-" : "+";
        } else if (inputNum2 > 0) {
            inputNum2 *= (symbol1 === "+") ? 1 : -1;
        }
        
        if (inputNum3 < 0) {
            inputNum3 *= (symbol2 === "+") ? 1 : -1;
            symbol2 = (symbol2 === "+") ? "-" : "+";
        } else if (inputNum3 > 0) {
            inputNum3 *= (symbol2 === "+") ? 1 : -1;
        }

        if (inputNum4 < 0) {
            inputNum4 *= (symbol3 === "+") ? 1 : -1;
            symbol3 = (symbol3 === "+") ? "-" : "+";
        } else if (inputNum4 > 0) {
            inputNum4 *= (symbol3 === "+") ? 1 : -1;
        }


        // Make calculations for LCM, new numerators, result, and simplified version
        let denominators = [inputDen1, inputDen2];
        let numerators = [inputNum1, inputNum2];
        let lcm;
        let multiples = [];
        let newNumerators = [];
        let numeratorFinal = 0;

        // add the denominators and numerators of fractions to the array depending on selected number
        if (numberFractions >= 3) {
            denominators.push(inputDen3);
            numerators.push(inputNum3);
        }
        if (numberFractions >= 4) {
            denominators.push(inputDen4);
            numerators.push(inputNum4);
        }
        // find the LCM of all the denominators
        lcm = findlcm(denominators, numberFractions);

        // Divide LCM by each denominator, multiply that by numerator and add new numerators
        for (let i = 0; i < numberFractions; i++) {
            multiples.push(lcm / denominators[i]);
            newNumerators.push(multiples[i] * numerators[i]);
            numeratorFinal += newNumerators[i];
        }

        // simplify the final fraction
        const gcdFinal = Math.abs(gcd(numeratorFinal, lcm));
        const numFinal = numeratorFinal / gcdFinal;
        const denFinal = lcm / gcdFinal;


        // Make calculations of common denominator, new numerators, and final result
        if (numberFractions === 2) {

            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiples[0]}}{${inputDen1}\\times ${multiples[0]} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiples[1]}}{${inputDen2}\\times ${multiples[1]}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${newNumerators[0]}}{${lcm}}${symbol1}\\frac{${Math.abs(newNumerators[1])}}{${lcm}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily:</p><p>$$=\\frac{${newNumerators[0]}${symbol1}${Math.abs(newNumerators[1])}}{${lcm}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm}}$$</p>`
            if (inputDen1 != inputDen2) {
                finalAnswer = `${answerHeter} ${answerHomo}`;
            } else if (inputDen1 === inputDen2) {
                finalAnswer = `${answerHomo}`;
            }
        }
        if (numberFractions === 3) {

            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}} ${symbol2} \\frac{${Math.abs(inputNum3)}}{${inputDen3}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiples[0]}}{${inputDen1}\\times ${multiples[0]} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiples[1]}}{${inputDen2}\\times ${multiples[1]}} ${symbol2}\\frac{${Math.abs(inputNum3)}\\times  ${multiples[2]}}{${inputDen3}\\times ${multiples[2]}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${newNumerators[0]}}{${lcm}}${symbol1}\\frac{${Math.abs(newNumerators[1])}}{${lcm}} ${symbol2}\\frac{${Math.abs(newNumerators[2])}}{${lcm}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily</p><p>$$=\\frac{${newNumerators[0]}${symbol1}${Math.abs(newNumerators[1])}${symbol2}${Math.abs(newNumerators[2])}}{${lcm}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm}}$$</p>`
            if (inputDen1 != inputDen2 || inputDen1 != inputDen3) {
                finalAnswer = `${answerHeter} ${answerHomo}`;
            } else if (inputDen1 === inputDen2 && inputDen1 === inputDen3) {
                finalAnswer = `${answerHomo}`;
            }
        }
        if (numberFractions === 4) {

            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}} ${symbol2} \\frac{${Math.abs(inputNum3)}}{${inputDen3}}${symbol3} \\frac{${Math.abs(inputNum4)}}{${inputDen4}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiples[0]}}{${inputDen1}\\times ${multiples[0]} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiples[1]}}{${inputDen2}\\times ${multiples[1]}} ${symbol2}\\frac{${Math.abs(inputNum3)}\\times  ${multiples[2]}}{${inputDen3}\\times ${multiples[2]}} ${symbol3} \\frac{${Math.abs(inputNum4)}\\times  ${multiples[3]}}{${inputDen4}\\times ${multiples[3]}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${newNumerators[0]}}{${lcm}}${symbol1}\\frac{${Math.abs(newNumerators[1])}}{${lcm}} ${symbol2}\\frac{${Math.abs(newNumerators[2])}}{${lcm}} ${symbol3}\\frac{${Math.abs(newNumerators[3])}}{${lcm}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily:</p><p>$$=\\frac{${newNumerators[0]}${symbol1}${Math.abs(newNumerators[1])}${symbol2}${Math.abs(newNumerators[2])}${symbol3}${Math.abs(newNumerators[3])}}{${lcm}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm}}$$</p>`
            if (inputDen1 === inputDen2 === inputDen3 === inputDen4) {
                finalAnswer = `${answerHomo}`;
            } else {
                finalAnswer = `${answerHeter} ${answerHomo}`;
            }
        }
    }
    document.getElementById("calculation").innerHTML = `${finalAnswer}${simplified}`;
    document.getElementById("finalSolution").innerHTML = `${finalSolution}`;
    renderMathInElement(document.body, katexops);
}


const clearValues = () => {
    document.getElementById("inputNum1").value = "";
    document.getElementById("inputDen1").value = "";
    document.getElementById("inputNum2").value = "";
    document.getElementById("inputDen2").value = "";
    document.getElementById("inputNum3").value = "";
    document.getElementById("inputDen3").value = "";
    document.getElementById("inputNum4").value = "";
    document.getElementById("inputDen4").value = "";
    document.getElementById("calculation").innerHTML = "";
    document.getElementById("finalSolution").innerHTML = "";
}