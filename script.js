"use strcat";

// get elements
const titleEl = document.getElementById("input");
// const quantityEl = document.getElementById("quantity");
const formEl = document.getElementById("form-submit");
const outputEl = document.getElementById("list-item");

// addEventListener
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const listName = titleEl.value;
  // const quantity = quantityEl.value;

  const list = document.createElement("li");

  list.innerHTML = `${listName} 
  <button><i class="fa-solid fa-pen-to-square"></i>
  </button>
  <button><i class="fa-solid fa-trash"></i></i>
  </button>`;

  // - ${quantity}
  // <button><i class="fa-sharp fa-solid fa-upload"><i><button>
  // <button><i class="fa-sharp fa-solid fa-trash-xmark"><i></button> `

  outputEl.appendChild(list);
});
