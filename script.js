"use strcat";

// get elements
const titleEl = document.getElementById("input");
const formEl = document.getElementById("form-submit");
const containerEl = document.getElementById("list-item");
// const quantityEl = document.getElementById("quantity");
// const outputEl = document.getElementById("list-item");

// initial element
// let item = [
//   {title: 'food'}
//   {title: 'apple'}
// ];

const task = [{ title: "apple" }, { title: "banana" }, { title: "oranges" }];

task.forEach(task) => {
  const taskEl = document.createElement(li);
  taskEl.classList.add('list-item');
  taskEl.innerText = `${task.title}`;
  containerEl.appendChild(taskEl); 
}

// // addEventListener

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = titleEl.value;

  const task = {
    id: 1;
    taskName: title;
  };

});

//   const list = document.createElement("li");

//   list.innerHTML = `${listName}
//   <button class='btn-edit' onclick='editItem'><i class="fa-solid fa-pen-to-square"></i>
//   </button>
//   <button class='btn-delete' onclick='deleteItem'><i class="fa-solid fa-trash"></i></i>
//   </button>`;

//   // - ${quantity}
//   // <button><i class="fa-sharp fa-solid fa-upload"><i><button>
//   // <button><i class="fa-sharp fa-solid fa-trash-xmark"><i></button> `

//   outputEl.appendChild(list);