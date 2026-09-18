let firstInputContent = document.getElementById("first-number");
let secondInputContent = document.getElementById("second-number");
let outputContent = document.getElementById("output");

function addition() {
    let soln = (Number(firstInputContent.value) + Number(secondInputContent.value));  // Number() function from slides 7 & 34 in 9/17 lec notes -- .value comes from slide 34 & in-lecture demo on 9/17
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else if (soln < 0) {
        outputContent.style.color = "red";
    }
}

function subtraction(){
    let soln = (Number(firstInputContent.value) - Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else if (soln < 0) {
        outputContent.style.color = "red";
    }
}

function multiplication() {
    let soln = (Number(firstInputContent.value) * Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else if (soln < 0) {
        outputContent.style.color = "red";
    }
}

function division(){
    let soln = (Number(firstInputContent.value) / Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else if (soln < 0) {
        outputContent.style.color = "red";
    }
}

function power(){
    let firstVal = Number(firstInputContent.value)
    let secondVal = Number(secondInputContent.value)
    let soln = powerLoop(firstVal, secondVal);
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else if (soln < 0) {
        outputContent.style.color = "red";
    }
}

// powerLoop function comes directly from slide 34 in 9/17 lecture,
// modified to account for negative exponents as per: https://piazza.com/class/mshyf6c9eym6i3/post/16
function powerLoop(base, exponent) {
    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {      // ignore negative exponents for now; treat them all as positive
        result *= base;
    }

    // if the original exponent was negative, we can now
    // account for that by finding the reciprocal:
    if (exponent < 0) {
        result = 1 / result;
    }
    return result;
}

function clearOutput(){
    outputContent.innerHTML = "";
    firstInputContent.value = "";
    secondInputContent.value = "";
}