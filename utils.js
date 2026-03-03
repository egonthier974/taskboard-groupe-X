const fs = require("fs");

const FILE = "./tasks.json";

function readTasks() {
  if (!fs.existsSync(FILE)) {
    return [];
  }
  const data = fs.readFileSync(FILE);
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, description, 2));
}

module.exports = {
  readTasks,
  writeTasks
};
