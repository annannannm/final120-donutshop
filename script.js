<<<<<<< HEAD
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const signup_form = document.querySelector(".sign-up-form");
const login_form = document.querySelector(".sign-in-form");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

signup_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#signup-username").value.trim();
    const password = document.querySelector("#signup-password").value;

    if (username === "" || password === "") {
        alert("Please fill in both boxes!");
        return;
    }

    if (username.toLowerCase() === "manager") {
        alert("This username is reserved!");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find(user => 
        user.username.toLowerCase() === username.toLowerCase()
    );
    if (existingUser) {
        alert("This username already exists!");
        return;
    }
    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created! You can now log in.");

    signup_form.reset();
    container.classList.remove("sign-up-mode");
});

login_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password!");
        return;
    }

    // Manager login
    if (username === "manager" && password === "donuts123") {
        window.location.href = "mandash.html";
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(user =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );
    if (foundUser) {
        window.location.href = "welcome.html";
    } else {
        alert("Incorrect username or password! Please sign up first.");
    }
});






=======
const buttons = document.querySelectorAll('.tabbtn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
>>>>>>> origin/ez
