console.log("hey!, working")

let tasks = [];

const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")

// Function to handle form submissions
function handleSubmission(event) {
  event.preventDefault();

  //1-Get Input Values  
const taskName = document.getElementById("taskName").value
const taskDescription = document.getElementById("taskDescription").value
const taskDeadline = document.getElementById("taskDeadline").value

  //2-Validate Input Values
if(taskName == "" || taskDeadline === "") {
alert("Name and deadline are required!")
return; 
    }
  //3-Update Tasks Array
tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline});
render();
}

// Function to render tasks in the table 
function render() {
  taskTable.innerHTML = tasks.map(task => `
  <tr>
  <td>${task.name}</td>
  <td>${task.description}</td>
  <td>${task.deadline}</td>
  <td><button onclick="markTaskComplete(this)">Complete</button></td>
  <td><button onclick="removeTask(this)">Remove</button></td>
  </tr>
  `).join(''); 
  }
function markTaskComplete(button) {
  const row = button.parentNode.parentNode;
  row.classList.add('completed'); 
}

function removeTask(button) {
  const row = button.parentNode.parentNode; 
  row.remove(); 
}
// Function to initialize the table
function init() {
taskTable.innerHTML = ''; // Clear the table
tasks = []; // Reset the tasks array
render(); // Call the render function
}
taskForm.addEventListener('submit', handleSubmission);

init();


