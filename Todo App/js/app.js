// Selectors

let addItem = document.getElementById("btn-add");
let userInput = document.getElementById("user-input");
let itemList = document.getElementById("list-items");

userInput.setAttribute("maxlength", "60");

// Event listners

addItem.addEventListener("click", gettingInput);

// Function

function gettingInput(event) {
    event.preventDefault();

    if (userInput.value === "") {
        return 0;
    }

    else {
        // Creating Element
        let todoDiv = document.createElement("div");
        let todoItem = document.createElement("li");
        let deleteBtn = document.createElement("button");
        let editBtn = document.createElement("button");

        // Inserting Element And Arttibute
        todoDiv.classList.add("todo")
        todoItem.textContent = userInput.value;
        deleteBtn.innerHTML = '<i class="fas fa-minus-circle"></i>Delete';
        editBtn.innerHTML = '<i class="fas fa-pen"></i>Edit';
        deleteBtn.addEventListener("click", removeElement);
        editBtn.addEventListener("click", editElement);

        todoDiv.appendChild(todoItem);
        todoDiv.appendChild(editBtn);
        todoDiv.appendChild(deleteBtn);

        itemList.appendChild(todoDiv)

        // Clearing Input Text
        userInput.value = "";
    }
}

function removeElement(event) {
    event.preventDefault();
    event.target.parentNode.classList.add("fall");
    event.target.parentNode.addEventListener("transitionend",function(){
        event.target.parentNode.remove();
    });
}

function editElement(event) {
    event.preventDefault();

    // Creating Element
    let inputText = event.target.parentNode.firstElementChild.textContent;
    let editTodo = document.createElement("input");
    let submitEdit = document.createElement("button");
    let todoElement = event.target.parentNode

    // Clearing Parent Element
    todoElement.innerHTML = "";

    // Inserting Element And Arttibute
    editTodo.setAttribute("id", "edit-todo");
    editTodo.setAttribute("maxlength", "60");
    submitEdit.addEventListener("click", addChanges)
    submitEdit.innerHTML = '<i class="fas fa-clipboard-check"></i>OK';
    editTodo.value = inputText;

    todoElement.appendChild(editTodo)
    todoElement.appendChild(submitEdit)

}

function addChanges(event) {
    // Creating Element
    let parentTag = event.target.parentNode;
    let inputText = event.target.parentNode.firstElementChild.value;
    let todoItem = document.createElement("li");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    // Clearing Parent Element
    parentTag.innerHTML = "";

    // Inserting Element And Arttibute
    todoItem.textContent = inputText;
    deleteBtn.innerHTML = '<i class="fas fa-minus-circle"></i>Delete';
    editBtn.innerHTML = '<i class="fas fa-pen"></i>Edit';
    deleteBtn.addEventListener("click", removeElement);
    editBtn.addEventListener("click", editElement);

    parentTag.appendChild(todoItem);
    parentTag.appendChild(editBtn);
    parentTag.appendChild(deleteBtn);
}