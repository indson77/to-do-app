let tasks = [];

const input = document.getElementById("taskInput");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    tasks.push(text);
    input.value = "";

    render();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
          <li>
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
          </li>
        `;
    });
}