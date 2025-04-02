// popup

document.getElementById("open-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

// password

function controleerWachtwoord(event) {
    event.preventDefault();

    var wachtwoord = document.getElementById("password").value;
    var correctWachtwoord = "28736";

    if (wachtwoord === correctWachtwoord) {
        window.location.href = "final.html";
    } else {
        alert("Invalid password! Make sure you only use (5) numbers and enter the correct password.");
    }
}