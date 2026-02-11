function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function registerUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("welcomeMsg");

    if (name === "" || phone === "" || email === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all details.";
    } else {
        msg.style.color = "green";
        msg.innerText = "Welcome " + name + "! Registration successful.";
    }
}
