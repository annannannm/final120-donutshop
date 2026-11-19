const menuitem = document.getElementById("menu-container");
const template = document.getElementById("menu-item-template");

function displayForm() {
    const formContainer = document.getElementById("form-container");

    formContainer.innerHTML = `
        <form class="form" id="add-item-input">
            <input type="text" id="item-title" placeholder="Item Name" required />
            <input type="number" id="item-price" step="0.01" placeholder="Item Price" required />
            <input type="file" id="item-image" accept="image/*" required />
            <input type="number" id="item-stock" placeholder="Stock Amt" required />
            <button type="submit">Add to Menu</button>
        </form>
    `;

    const form = document.getElementById("add-item-input");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addMenu();
    });
}

function addMenu() {
    const name = document.getElementById("item-title").value;
    const price = document.getElementById("item-price").value;
    const stock = document.getElementById("item-stock").value;
    const imageInput = document.getElementById("item-image");
    const imageFile = imageInput.files[0];

    if (!imageFile) {
        return;
    }

    const clone = template.content.cloneNode(true);
    clone.querySelector(".card-img").src = URL.createObjectURL(imageFile);
    clone.querySelector(".card-stock").textContent = `Stock: ${stock}`;
    clone.querySelector(".card-title").textContent = name;
    clone.querySelector(".card-price").textContent = `$${Number(price).toFixed(2)}`;
    menuitem.appendChild(clone);
}
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






