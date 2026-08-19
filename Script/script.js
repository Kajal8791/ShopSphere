const themeButton = document.getElementById("themeButton");

let isThemeChanged = false;

themeButton.addEventListener("click", function () {

    if (!isThemeChanged) {

        document.body.classList.add("alternate-theme");

        themeButton.textContent = "Reset Look";

        isThemeChanged = true;

    } else {

        document.body.classList.remove("alternate-theme");

        themeButton.textContent = "Try New Look";

        isThemeChanged = false;

    }

});


/* TASK 6 - CONTACT FORM VALIDATION */

// const contactForm = document.querySelector(".contact-form");

// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");


// contactForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const message = messageInput.value.trim();


//     // Name validation
//     if (name === "") {
//         alert("Please enter your name.");
//         nameInput.focus();
//         return;
//     }


//     // Email validation
//     const emailPattern =
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         emailInput.focus();
//         return;
//     }


//     // Message validation
//     if (message === "") {
//         alert("Please enter your message.");
//         messageInput.focus();
//         return;
//     }


//     // Success
//     alert("Your message has been sent successfully!");

//     contactForm.reset();

// });