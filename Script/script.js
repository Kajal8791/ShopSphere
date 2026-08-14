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