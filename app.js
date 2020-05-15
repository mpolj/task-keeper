var tasks = [];
var nextId = 0;
//var table = document.getElementById("taskTable");

function addTaskFromInput() {
    var taskTitle = document.getElementById("task").value;
    addTask(taskTitle);
    document.getElementById("task").value = "";
}

function addTask(taskTitle) {
    var newTask = {
        title: taskTitle,
        id: nextId,
    }


    tasks.push(newTask);
    
    taskCount()
    createTaskRow(newTask)

    nextId++;
}

function createTaskRow(newTask) {
    var table = document.getElementById("taskTable");
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML = newTask.title;

    var table = document.getElementById("taskTable");
    var cell = row.insertCell(1);
    var button = document.createElement("button");
    button.setAttribute("id", nextId);
    button.setAttribute("class", "btn btn-danger");
    button.onclick = deleteTask;
    button.innerHTML = "Delete";
    cell.appendChild(button);
}

function taskCount() {
    var uncompletedTasks = tasks.length;
    document.getElementById("taskCount").innerHTML = uncompletedTasks;
}

function deleteTask(event) {
    var index = tasks.indexOf("Walk the dog");
    console.log(event.target.id);
}

addTask("Walk the dog");
addTask("Feed the cat");
console.log(tasks);

