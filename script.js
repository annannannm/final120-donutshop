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

