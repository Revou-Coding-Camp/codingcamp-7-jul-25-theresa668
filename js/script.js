document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const dateInput = document.getElementById("todo-date");
  const list = document.getElementById("todo-list");
  const search = document.getElementById("search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value.trim();
    const date = dateInput.value;

    if (!task || !date) {
      alert("Please enter both task and date.");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}<span class="date"> (${date})</span></span>
      <button class="delete">Delete</button>
    `;

    list.appendChild(li);
    input.value = "";
    dateInput.value = "";

    li.querySelector(".delete").addEventListener("click", () => {
      li.remove();
    });
  });

  search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();
    const tasks = list.querySelectorAll("li");

    tasks.forEach((task) => {
      const text = task.textContent.toLowerCase();
      task.style.display = text.includes(keyword) ? "" : "none";
    });
  });
});