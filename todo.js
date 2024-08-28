document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    };

    // Save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('li').forEach(li => {
            const task = {
                id: li.dataset.id,
                text: li.querySelector('.task-text').textContent,
                completed: li.querySelector('input[type="checkbox"]').checked
            };
            tasks.push(task);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Create a new task element
    const createTaskElement = (task) => {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = task.text;

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';

        // Edit button functionality
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit task:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
                saveTasks();
            }
        });

        // Delete button functionality
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });

        // Checkbox change functionality
        checkbox.addEventListener('change', () => {
            saveTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    };

    // Add task to DOM and local storage
    const addTaskToDOM = (task) => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please Enter Any Task!');
            return;
        }

        const task = {
            text: taskText,
            completed: false,
            id: Date.now() // Unique ID for each task
        };
        addTaskToDOM(task);
        taskInput.value = ''; // Clear input field
        saveTasks(); // Save tasks to local storage
    };

    // Event listeners
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial load
    loadTasks();
});
