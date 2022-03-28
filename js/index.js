// Start Coding Shadow Generator ...

let element = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

// =========================================================
// Giving Data of DOM
function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value;
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let ShadowColorOpacity = document.getElementById("shadow-opacity").value;
    let shadowInset = document.getElementById("shadow-inset").checked;

    let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,ShadowColorOpacity)}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,ShadowColorOpacity)}`
    element.style.boxShadow = boxShadow;
    code.textContent = `box-shadow: ${boxShadow}`
}
// =========================================================

// Converting Hex Values to RGBA
function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

// Call the generateShadow function on every page load
window.onload = generateShadow();


// Copy the Generated code to clipboard
function copyCode() {
    code.select();
    document.execCommand("copy");
}

// =========================================================
// Code for Notification
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}
// =========================================================


// =========================================================
// Loading page code's

// Helper(s)
// =========
let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Function
// ========
function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 400);
    }, 900);
}

// Execution
// =========
animate(dots, "dots--animate");

window.addEventListener("load", () => {
    let loadingpage = document.querySelector(".loading_page");
    loadingpage.classList.add("loaded");
})

// =========================================================