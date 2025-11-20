
const welcomePage = document.getElementById("welcomePage");
const todoPage = document.getElementById("todoPage");
const startBtn = document.getElementById("startBtn");
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");


startBtn.addEventListener("click", () => {
  welcomePage.classList.remove("active");
  todoPage.classList.add("active");
  document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});


addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.classList.add("editBtn");
  editBtn.onclick = () => editTask(span);

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.classList.add("deleteBtn");
  delBtn.onclick = () => li.remove();

  
  li.append(span, editBtn, delBtn);
  todoList.appendChild(li);

  todoInput.value = "";
}

function editTask(span) {
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}
