//functions to find the least common multiple
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

function findlcm(arr, n) {
    let ans = arr[0];
    for (let i = 1; i < n; i++) ans = (((arr[i] * ans)) / (gcd(arr[i], ans)));
    return ans;
}

//initializing with 2 fractions
let numberFractions = 2;

//shows 2 fractions, hides fractions 3 and 4
function twoFractions() {
    let fraction3 = document.getElementsByClassName("fraction3");
    let fraction4 = document.getElementsByClassName("fraction4");
    let symbolAction2 = document.getElementById("symbol2");
    let symbolAction3 = document.getElementById("symbol3");
    fraction3[0].style.display = "none";
    fraction4[0].style.display = "none";
    symbolAction2.style.display = "none";
    symbolAction3.style.display = "none";
    var Button1 = document.getElementById('twoFractions');
    Button1.classList.add('button-on');
    Button1.classList.remove('button-off');
    var Button2 = document.getElementById('threeFractions');
    Button2.classList.add('button-off');
    Button2.classList.remove('button-on');
    var Button3 = document.getElementById('fourFractions');
    Button3.classList.add('button-off');
    Button3.classList.remove('button-on');
    numberFractions = 2;
}

//shows 3 fractions, hides fraction #4
function threeFractions() {
    let fraction3 = document.getElementsByClassName("fraction3");
    let fraction4 = document.getElementsByClassName("fraction4");
    let symbolAction2 = document.getElementById("symbol2");
    let symbolAction3 = document.getElementById("symbol3");
    fraction3[0].style.display = "block";
    fraction4[0].style.display = "none";
    symbolAction2.style.display = "block";
    symbolAction3.style.display = "none";
    var Button1 = document.getElementById('twoFractions');
    Button1.classList.add('button-off');
    Button1.classList.remove('button-on');
    var Button2 = document.getElementById('threeFractions');
    Button2.classList.add('button-on');
    Button2.classList.remove('button-off');
    var Button3 = document.getElementById('fourFractions');
    Button3.classList.add('button-off');
    Button3.classList.remove('button-on');
    numberFractions = 3;
}


//shows all fractions
function fourFractions() {
    let fraction3 = document.getElementsByClassName("fraction3");
    let fraction4 = document.getElementsByClassName("fraction4");
    let symbolAction2 = document.getElementById("symbol2");
    let symbolAction3 = document.getElementById("symbol3");
    fraction3[0].style.display = "block";
    fraction4[0].style.display = "block";
    symbolAction2.style.display = "block";
    symbolAction3.style.display = "block";
    var Button1 = document.getElementById('twoFractions');
    Button1.classList.add('button-off');
    Button1.classList.remove('button-on');
    var Button2 = document.getElementById('threeFractions');
    Button2.classList.add('button-off');
    Button2.classList.remove('button-on');
    var Button3 = document.getElementById('fourFractions');
    Button3.classList.add('button-on');
    Button3.classList.remove('button-off');
    numberFractions = 4;
}

function addBtn() {
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
    let finalAnswer = 0;
    let finalSolution = 0;
    let simplified = "";
    if (parseFloat(inputDen1) === 0 || parseFloat(inputDen2) === 0 || parseFloat(inputDen3) === 0 || parseFloat(inputDen4) === 0) {
        finalSolution = '<p style="color:crimson; text-align:center;">Denominators cannot be 0</p>';
        finalAnswer = "";
    } else {
        let step1 = "";
        if (inputNum2 < 0 || inputDen2 < 0 || inputNum3 < 0 || inputDen3 < 0 || inputNum4 < 0 || inputDen4 < 0) {
            step1 = `<p>We can simplify the negative signs and write the fraction as follows</p>`
        } else {
            step1 = "";
        }
        if (inputDen1 < 0) {
            inputDen1 = (-1) * (parseFloat(inputDen1));
            inputNum1 = (-1) * (parseFloat(inputNum1));
        }
        if (inputDen2 < 0) {
            inputDen2 = (-1) * (parseFloat(inputDen2));
            inputNum2 = (-1) * (parseFloat(inputNum2));
        }
        if (inputDen3 < 0) {
            inputDen3 = (-1) * (parseFloat(inputDen3));
            inputNum3 = (-1) * (parseFloat(inputNum3));
        }
        if (inputDen4 < 0) {
            inputDen4 = (-1) * (parseFloat(inputDen4));
            inputNum4 = (-1) * (parseFloat(inputNum4));
        }
        if (numberFractions === 2) {
            if (symbol1 == "+" && inputNum2 < 0) {
                symbol1 = "-";
            } else if (symbol1 == "-" && inputNum2 < 0) {
                symbol1 = "+";
                inputNum2 = (-1) * (inputNum2);
            } else if (symbol1 == "-" && inputNum2 > 0) {
                inputNum2 = (-1) * (inputNum2);
            }
            let lcm2 = findlcm([parseFloat(inputDen1), parseFloat(inputDen2)], 2);
            let multiple1 = lcm2 / parseFloat(inputDen1);
            let multiple2 = lcm2 / parseFloat(inputDen2);
            let numerator1 = multiple1 * parseFloat(inputNum1);
            let numerator2 = multiple2 * parseFloat(inputNum2);
            let numeratorFinal = parseFloat(numerator1) + parseFloat(numerator2);
            let gcdFinal = Math.abs(gcd(numeratorFinal, lcm2));
            let numFinal = numeratorFinal / gcdFinal;
            let denFinal = lcm2 / gcdFinal;
            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm2}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiple1}}{${inputDen1}\\times ${multiple1} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiple2}}{${inputDen2}\\times ${multiple2}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${numerator1}}{${lcm2}}${symbol1}\\frac{${Math.abs(numerator2)}}{${lcm2}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily:</p><p>$$=\\frac{${numerator1}${symbol1}${Math.abs(numerator2)}}{${lcm2}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm2}}$$</p>`
            if (inputDen1 != inputDen2) {
                finalAnswer = `${answerHeter} ${answerHomo}`;
            } else if (inputDen1 === inputDen2) {
                finalAnswer = `${answerHomo}`;
            }
        }
        if (numberFractions === 3) {
            if (symbol1 == "+" && inputNum2 < 0) {
                symbol1 = "-";
            } else if (symbol1 == "-" && inputNum2 < 0) {
                symbol1 = "+";
                inputNum2 = (-1) * (inputNum2);
            } else if (symbol1 == "-" && inputNum2 > 0) {
                inputNum2 = (-1) * (inputNum2);
            }
            if (symbol2 == "+" && inputNum3 < 0) {
                symbol2 = "-";
            } else if (symbol2 == "-" && inputNum3 < 0) {
                symbol2 = "+";
                inputNum3 = (-1) * (inputNum3);
            } else if (symbol2 == "-" && inputNum3 > 0) {
                inputNum3 = (-1) * (inputNum3);
            }
            let lcm3 = findlcm([parseFloat(inputDen1), parseFloat(inputDen2), parseFloat(inputDen3)], 3);
            let multiple1 = lcm3 / parseFloat(inputDen1);
            let multiple2 = lcm3 / parseFloat(inputDen2);
            let multiple3 = lcm3 / parseFloat(inputDen3);
            let numerator1 = multiple1 * parseFloat(inputNum1);
            let numerator2 = multiple2 * parseFloat(inputNum2);
            let numerator3 = multiple3 * parseFloat(inputNum3);
            let numeratorFinal = parseFloat(numerator1) + parseFloat(numerator2) + parseFloat(numerator3);
            let gcdFinal = Math.abs(gcd(numeratorFinal, lcm3));
            let numFinal = numeratorFinal / gcdFinal;
            let denFinal = lcm3 / gcdFinal;
            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}} ${symbol2} \\frac{${Math.abs(inputNum3)}}{${inputDen3}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm3}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiple1}}{${inputDen1}\\times ${multiple1} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiple2}}{${inputDen2}\\times ${multiple2}} ${symbol2}\\frac{${Math.abs(inputNum3)}\\times  ${multiple3}}{${inputDen3}\\times ${multiple3}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${numerator1}}{${lcm3}}${symbol1}\\frac{${Math.abs(numerator2)}}{${lcm3}} ${symbol2}\\frac{${Math.abs(numerator3)}}{${lcm3}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily</p><p>$$=\\frac{${numerator1}${symbol1}${Math.abs(numerator2)}${symbol2}${Math.abs(numerator3)}}{${lcm3}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm3}}$$</p>`
            if (inputDen1 != inputDen2 || inputDen1 != inputDen3) {
                finalAnswer = `${answerHeter} ${answerHomo}`;
            } else if (inputDen1 === inputDen2 && inputDen1 === inputDen3) {
                finalAnswer = `${answerHomo}`;
            }
        }
        if (numberFractions === 4) {
            if (symbol1 == "+" && inputNum2 < 0) {
                symbol1 = "-";
            } else if (symbol1 == "-" && inputNum2 < 0) {
                symbol1 = "+";
                inputNum2 = (-1) * (inputNum2);
            } else if (symbol1 == "-" && inputNum2 > 0) {
                inputNum2 = (-1) * (inputNum2);
            }
            if (symbol2 == "+" && inputNum3 < 0) {
                symbol2 = "-";
            } else if (symbol2 == "-" && inputNum3 < 0) {
                symbol2 = "+";
                inputNum3 = (-1) * (inputNum3);
            } else if (symbol2 == "-" && inputNum3 > 0) {
                inputNum3 = (-1) * (inputNum3);
            }
            if (symbol3 == "+" && inputNum4 < 0) {
                symbol3 = "-";
            } else if (symbol3 == "-" && inputNum4 < 0) {
                symbol3 = "+";
                inputNum4 = (-1) * (inputNum4);
            } else if (symbol3 == "-" && inputNum4 > 0) {
                inputNum4 = (-1) * (inputNum4);
            }
            let lcm4 = findlcm([parseFloat(inputDen1), parseFloat(inputDen2), parseFloat(inputDen3), parseFloat(inputDen4)], 4);
            let multiple1 = lcm4 / parseFloat(inputDen1);
            let multiple2 = lcm4 / parseFloat(inputDen2);
            let multiple3 = lcm4 / parseFloat(inputDen3);
            let multiple4 = lcm4 / parseFloat(inputDen4);
            let numerator1 = multiple1 * parseFloat(inputNum1);
            let numerator2 = multiple2 * parseFloat(inputNum2);
            let numerator3 = multiple3 * parseFloat(inputNum3);
            let numerator4 = multiple4 * parseFloat(inputNum4);
            let numeratorFinal = parseFloat(numerator1) + parseFloat(numerator2) + parseFloat(numerator3) + parseFloat(numerator4);
            let gcdFinal = Math.abs(gcd(numeratorFinal, lcm4));
            let numFinal = numeratorFinal / gcdFinal;
            let denFinal = lcm4 / gcdFinal;
            if (numeratorFinal < 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
                finalSolution = `<p style="font-size:20px;">$$=-\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            } else {
                finalSolution = `<p style="font-size:20px;">$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            if (gcdFinal > 1 && numeratorFinal > 0) {
                simplified = `<p>Simplifying the fraction, we have:</p><p>$$=\\frac{${Math.abs(numFinal)}}{${denFinal}}$$</p>`
            }
            let answerHeter = `${step1}<p>$$=\\frac{${inputNum1}}{${inputDen1}} ${symbol1} \\frac{${Math.abs(inputNum2)}}{${inputDen2}} ${symbol2} \\frac{${Math.abs(inputNum3)}}{${inputDen3}}${symbol3} \\frac{${Math.abs(inputNum4)}}{${inputDen4}}$$</p><p>We have heterogeneous denominators, so we have to find the <a href="https://www.mechamath.com/calculators/least-common-multiple-calculator-mcm/" target="_blank">least common denominador (LCD)</a>.</p><p>In this case, the LCD is ${lcm4}</p><p>Now, we multiply both the numerator and denominator by a number that makes the denominator equal to the LCD.</p><p>$$=\\frac{${inputNum1}\\times  ${multiple1}}{${inputDen1}\\times ${multiple1} }${symbol1}\\frac{${Math.abs(inputNum2)}\\times  ${multiple2}}{${inputDen2}\\times ${multiple2}} ${symbol2}\\frac{${Math.abs(inputNum3)}\\times  ${multiple3}}{${inputDen3}\\times ${multiple3}} ${symbol3} \\frac{${Math.abs(inputNum4)}\\times  ${multiple4}}{${inputDen4}\\times ${multiple4}}$$</p><p>Multiplying and writing the fractions in simple form, we have:</p><p>$$=\\frac{${numerator1}}{${lcm4}}${symbol1}\\frac{${Math.abs(numerator2)}}{${lcm4}} ${symbol2}\\frac{${Math.abs(numerator3)}}{${lcm4}} ${symbol3}\\frac{${Math.abs(numerator4)}}{${lcm4}}$$</p>`;
            let answerHomo = `<p>Since we have like denominators, we can join the fractions and add them easily:</p><p>$$=\\frac{${numerator1}${symbol1}${Math.abs(numerator2)}${symbol2}${Math.abs(numerator3)}${symbol3}${Math.abs(numerator4)}}{${lcm4}}$$</p><p>$$=\\frac{${numeratorFinal}}{${lcm4}}$$</p>`
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


function clearValues() {
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