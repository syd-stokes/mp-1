// document.getElementById(“output”).innerHTML=String(result);
// let button = document.querySelector("button");
let firstInputContent = document.getElementById("first-number");
let secondInputContent = document.getElementById("second-number");
let outputContent = document.getElementById("output");

function addition() {
    let soln = (Number(firstInputContent.value) + Number(secondInputContent.value));  // Number() function from slide 7 in 9/17 lec notes
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else {
        outputContent.style.color = "red";
    }
}

function subtraction(){
    let soln = (Number(firstInputContent.value) - Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else {
        outputContent.style.color = "red";
    }
}

function multiplication() {
    let soln = (Number(firstInputContent.value) * Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else {
        outputContent.style.color = "red";
    }
}

function division(){
    let soln = (Number(firstInputContent.value) / Number(secondInputContent.value));
    outputContent.innerHTML = soln;
    if (soln >= 0) {
        outputContent.style.color = "black";
    } else {
        outputContent.style.color = "red";
    }
}

function power(){
    button.innerHTML = "^";
}