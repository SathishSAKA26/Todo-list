"use strcat";

// get elements
const titleEl = document.getElementById("input");
const quantityEl = document.getElementById("quantity");
const formEl = document.getElementById("form-submit");
const outputEl = document.getElementById("list-item");

// addEventListener
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const listName = titleEl.value;
  const quantity = quantityEl.value;

  const list = document.createElement("li");

  list.innerHTML = `${listName} - ${quantity} <button>delete</button> <button>update</button>`;
  outputEl.appendChild(list);
});
