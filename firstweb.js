// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// ================= HERO BUTTON =================

function showMessage() {

    alert("Welcome to Gautam's Portfolio!");

}


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const result = document.getElementById("result");

    result.innerText =
        "Thank you, " + name + "! Your message has been received.";

    form.reset();

});

