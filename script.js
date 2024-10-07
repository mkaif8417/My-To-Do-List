// app.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Add task when "Add Task" button is clicked
    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input field is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new task item (li)
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create buttons for the task
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        // Star Button
        const starBtn = document.createElement('button');
        starBtn.textContent = '☆'; // Empty star
        starBtn.classList.add('star');
        buttons.appendChild(starBtn);

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete');
        buttons.appendChild(completeBtn);

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        buttons.appendChild(editBtn);

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        buttons.appendChild(deleteBtn);

        li.appendChild(buttons);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Complete task functionality
        completeBtn.addEventListener('click', function() {
            completeTask(li, taskSpan);
        });

        // Edit task functionality
        editBtn.addEventListener('click', function() {
            editTask(li, taskSpan);
        });

        // Delete task functionality
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Mark task as important (star functionality)
        starBtn.addEventListener('click', function() {
            toggleImportantTask(li, starBtn);
        });
    }

    // Function to handle task completion
    function completeTask(taskItem, taskSpan) {
        // Remove the buttons (complete, delete, edit) once the task is completed
        const buttons = taskItem.querySelector('.buttons');
        taskItem.removeChild(buttons);

        // Mark the task as completed and add a checkmark
        taskItem.classList.add('completed');
    }

    // Function to handle task editing
    function editTask(taskItem, taskSpan) {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);

        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskSpan.textContent = newTaskText.trim();
        }
    }

    // Function to toggle important task (star)
    function toggleImportantTask(taskItem, starBtn) {
        taskItem.classList.toggle('important'); // Toggle important class

        if (taskItem.classList.contains('important')) {
            starBtn.textContent = '★'; // Filled star
        } else {
            starBtn.textContent = '☆'; // Empty star
        }
    }
});
