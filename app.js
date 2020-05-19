var tasks = [];
var nextId = 0;
var uncompletedTasks = 0;
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
    
    createTaskRow(newTask)

    nextId++;
    uncompletedTasks++;

    updateTaskCount()
}

function createTaskRow(newTask) {
    var table = document.getElementById("taskTable");
    var row = table.insertRow(1);
    var textCell = row.insertCell(0);
    var buttonCell = row.insertCell(1)
    var button = document.createElement("button");

    button.setAttribute("id", nextId);
    button.setAttribute("class", "btn btn-danger");
    button.onclick = deleteTask;
    button.innerHTML = "Delete";

    row.setAttribute("id", "row_" + nextId);

    buttonCell.appendChild(button);
    textCell.innerHTML = newTask.title;

}

function updateTaskCount() {
    document.getElementById("taskCount").innerHTML = uncompletedTasks;
}

function deleteTask(event) {
    var index = event.target.id;
    var idToDelete = "row_" + index;
    var elementToDelete = document.getElementById(idToDelete);
    elementToDelete.parentNode.removeChild(elementToDelete);
    
    uncompletedTasks--;
    updateTaskCount()
}

addTask("Walk the dog");
addTask("Feed the cat");
console.log(tasks);

