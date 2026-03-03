const { readTasks, writeTasks } = require("./utils");

const command = process.argv[2];
const argument = process.argv[3];

function addTask(title) {
  const tasks = readTasks();
  tasks.push({
    id: Date.now(),
    title,
    completed: false
  });
  writeTasks(tasks);
  console.log("Tâche ajoutée.");
}

function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("Aucune tâche.");
    return;
  }

  tasks.forEach(task => {
    console.log(
      `${task.id} - ${task.title} - ${task.completed ? "✔" : "✘"}`
    );
  });
}

switch (command) {
  case "add":
    addTask(argument);
    break;
  case "list":
    listTasks();
    break;
  default:
    console.log("Commandes disponibles pour EMMA : add, list");
}