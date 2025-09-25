const API_URL = "http://localhost:8080/api/todos";

const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
const todoTitle = document.getElementById("todo-title");

// Fetch and render todos
async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();

  todoList.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.innerHTML = `
      <span>${todo.title}</span>
      <div class="todo-actions">
        <button class="toggle">${todo.completed ? "Undo" : "Done"}</button>
        <button class="delete">Delete</button>
      </div>
    `;

    // Toggle button
    li.querySelector(".toggle").addEventListener("click", async () => {
      await fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: todo.title,
          completed: !todo.completed
        })
      });
      fetchTodos();
    });

    // Delete button
    li.querySelector(".delete").addEventListener("click", async () => {
      await fetch(`${API_URL}/${todo.id}`, { method: "DELETE" });
      fetchTodos();
    });

    todoList.appendChild(li);
  });
}

// Add new todo
addBtn.addEventListener("click", async () => {
  const title = todoTitle.value.trim();
  if (title) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false })
    });
    todoTitle.value = "";
    fetchTodos();
  }
});

// Initial load
fetchTodos();
