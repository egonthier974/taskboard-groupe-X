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
  fs.writeFileSync(FILE, JSON.stringify(tasks, commcommcomm

module.exports = {
  readTasks,
  writeTasks
};
