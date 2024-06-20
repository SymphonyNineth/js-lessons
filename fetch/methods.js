const itemsURL = "http://localhost:4000/items";

const itemContainer = document.getElementById("items");
const idInput = document.getElementById("id");

const fetchButton = document.getElementById("fetchButton");
const deleteButton = document.getElementById("delete")

const nameInput = document.getElementById("nameInput");
const patchId = document.getElementById("patchId");
const patchButton = document.getElementById("patchButton");

const fetchItems = async () => {
    itemContainer.innerHTML = "";
    const response = await fetch(itemsURL);
    const items = await response.json();
    items.forEach(item => {
        const name = document.createElement("h2");
        const age = document.createElement("p");
        const profession = document.createElement("div");
        const id = document.createElement("id");
        name.innerText = item.name;
        id.innerText = `ID: ${item.id}`;
        age.innerText = item.age;
        profession.innerText = item.profession;
        const itemElement = document.createElement("div");
        itemElement.classList.add("item")
        itemElement.appendChild(name);
        itemElement.appendChild(id);
        itemElement.appendChild(age);
        itemElement.appendChild(profession);
        itemContainer.appendChild(itemElement)
    })
}

fetchButton.addEventListener("click", fetchItems)

const deleteItem = async () => {
    const id = Number(idInput.value);
    const response = await fetch(`${itemsURL}/${id}`, {
        method: "DELETE",
    })
    const deletedItem = await response.json();
    console.log("Deleted Item", deletedItem);
    fetchItems();
    idInput.value = "";
}


deleteButton.addEventListener("click", deleteItem)


const patchItem = async () => {
    const name = nameInput.value;
    const id = Number(patchId.value);
    const response = await fetch(`${itemsURL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });
    const updatedItem = await response.json();
    console.log("Updated Item", updatedItem);
    fetchItems();
    nameInput.value = "";
    patchId.value = "";
}

patchButton.addEventListener("click", patchItem)