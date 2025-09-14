
        // --- Get DOM Elements ---
        // Get references to all the HTML elements we need to interact with
        const taskEntry = document.getElementById('task-input');
        const addTaskButton = document.getElementById('add-task-btn');
        const listContainer = document.getElementById('task-list');
        const progressIndicator = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-count');

        // Initialize an empty array to hold our tasks
        let todoItems = [];

        // --- Local Storage Functions ---
        // Function to save tasks to localStorage
        const saveTodoItems = () => {
            localStorage.setItem('tasks', JSON.stringify(todoItems));
        };

        // Function to load tasks from localStorage
        const loadTodoItems = () => {
            const storedItems = localStorage.getItem('tasks');
            if (storedItems) {
                todoItems = JSON.parse(storedItems);
            }
        };

        // --- Render UI from Data ---
        // This function draws the task list and updates the progress bar
        const renderTodoItems = () => {
            listContainer.innerHTML = ''; // Clear the current list
            
            if (todoItems.length === 0) {
                listContainer.innerHTML = `<li class="loading-text">No tasks yet. Add one!</li>`;
            } else {
                todoItems.forEach((task, index) => {
                    const listItem = document.createElement('li');
                    listItem.className = `task-item ${task.completed ? 'completed' : ''}`;
                    listItem.dataset.index = index; // Store the index on the list item

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className = 'task-checkbox';
                    checkbox.checked = task.completed;

                    const taskDescription = document.createElement('span');
                    taskDescription.className = 'task-text';
                    taskDescription.textContent = task.text;

                    const removeButton = document.createElement('button');
                    removeButton.className = 'remove-btn';
                    removeButton.textContent = '×';
                    removeButton.setAttribute('aria-label', 'Remove task');

                    listItem.appendChild(checkbox);
                    listItem.appendChild(taskDescription);
                    listItem.appendChild(removeButton);
                    listContainer.appendChild(listItem);
                });
            }

            // Update the progress bar based on completed tasks
            const completedCount = todoItems.filter(task => task.completed).length;
            const totalCount = todoItems.length;
            const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
            
            progressIndicator.style.width = `${completionPercentage}%`;
            progressText.textContent = `${completedCount} of ${totalCount} tasks completed`;
        };

        // --- Add Task Functionality ---
        const addNewTodoItem = () => {
            const taskText = taskEntry.value.trim();
            if (taskText !== '') {
                // Add a new task object to our tasks array
                todoItems.push({
                    text: taskText,
                    completed: false
                });
                // Save the updated array and re-render the list
                saveTodoItems();
                renderTodoItems();
                // Clear the input field and focus for the next task
                taskEntry.value = '';
                taskEntry.focus();
            }
        };

        // Add a click event listener to the "Add Task" button
        addTaskButton.addEventListener('click', addNewTodoItem);
        // Add a keyboard event listener to the input field for the "Enter" key
        taskEntry.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                addNewTodoItem();
            }
        });

        // --- Task Interaction (Checkbox & Remove) Functionality ---
        // Use event delegation to handle clicks on the task list
        listContainer.addEventListener('click', (e) => {
            const clickedItem = e.target.closest('.task-item');
            if (!clickedItem) return;

            const itemIndex = parseInt(clickedItem.dataset.index);

            if (e.target.classList.contains('remove-btn')) {
                // If the remove button was clicked, remove the task from the array
                todoItems.splice(itemIndex, 1);
            } else if (e.target.classList.contains('task-checkbox')) {
                // If the checkbox was clicked, toggle the 'completed' status
                todoItems[itemIndex].completed = e.target.checked;
            } else {
                return; // Do nothing if click is not on a target element
            }

            // After any change, save and re-render the list
            saveTodoItems();
            renderTodoItems();
        });

        // --- Initial Load ---
        // Load tasks from local storage when the page first loads
        loadTodoItems();
        // Render the initial task list on the page
        renderTodoItems();
