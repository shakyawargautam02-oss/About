
// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function () {

    const name = document.getElementById("name").value;
    const result = document.getElementById("result");

    result.innerText =
        "Thank you, " + name + "! Please wait while your message is sent.";

});
