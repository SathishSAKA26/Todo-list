"use strict";

// get elements
const inputEl = document.getElementById("input");
// const quantityEl = document.getElementById('quantity');
const formEl = document.getElementById("form-submit");
const todoLiEl = document.getElementById("todo-list");
const btnEl = document.getElementById("btn-submit");

// initial elements
let tasks = [];
let isEditing = false;
let editId = null;

// Function
function init() {
  isEditing = false;
  editId = null;
  btnEl.innerText = "submit";
}

init();

// UpdateUi function
const updateUi = function () {
  todoLiEl.innerHTML = null;
  tasks.forEach((task) => {
    const taskEl = document.createElement("li");
    taskEl.innerHTML = `${task.taskName}<button class='btn-update' onclick = updateItem(${task.id})>
      <i class="fa-solid fa-pen-to-square"></i>
  </button> 
   <button
    class='btn-delete' onclick = deleteItem(${task.id})>
   <i class="fa-solid fa-trash"></i>
   </button>`;

    todoLiEl.appendChild(taskEl);
  });
};

// delete function
const deleteItem = function (id) {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  updateUi();
};

// Update function
const updateItem = function (id) {
  isEditing = true;
  btnEl.innerHTML = "update";

  // find the element to update
  const itemToEdit = tasks.find((task) => {
    return task.id === id;
  });

  inputEl.value = itemToEdit.taskName;
  editId = itemToEdit.id;
};

// Event listener from
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputEl.value.trim() === "") {
    alert("Please enter the Item 😜");
  }

  const title = inputEl.value;

  if (isEditing) {
    tasks = tasks.map((task) => {
      if (task.id === editId) {
        return {
          id: editId,
          taskName: title,
        };
      } else {
        return task;
      }
    });

    // initial setting
    init();
    // update UI
    updateUi();
  } else {
    // create object
    const task = {
      // create random id
      id: Date.now(),
      taskName: title,
    };

    // add task push in object
    tasks.push(task);
  }

  // Display update UI
  updateUi();

  // clear input value
  inputEl.value = null;
});
