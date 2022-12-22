"use strcat";

// get elements
const inputEl = document.getElementById("input");
const butSubmitEl = document.getElementById("btn");
const outputEl = document.getElementById("list-item");

// addek
butSubmitEl.addEventListener("click", function () {
  const todo = inputEl.value;
  const list = document.createElement("li");

  list.innerHTML = `${todo}<button >delete</button>`;
  outputEl.appendChild(list);
});
