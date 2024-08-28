To-Do List App 

Overview :
This To-Do List App allows users to manage their tasks by adding, editing, and deleting them. It also supports marking tasks as completed using checkboxes. The application stores tasks in the browser's local storage, ensuring that tasks persist even after a page refresh. The app is responsive and works well on both desktop and mobile devices.

Features :
1.Add New Tasks: Enter a task description and click "Add" to create a new task.
2.Edit Tasks: Modify existing tasks by clicking the "Edit" button next to them.
3.Delete Tasks: Remove tasks by clicking the "Delete" button.
4.Mark Tasks as Completed: Use checkboxes to mark tasks as completed or incomplete.
5.Persistent Storage: Tasks are saved in the browser's local storage.
6.Responsive Design: The application adjusts its layout for different screen sizes.

How to Run :
1.Clone the Repository -
https://github.com/Kalpespatil/To-Do-List.git

2.Navigate to the Project Directory -
cd todo-app
Open index.html in Your Web Browser
You can open index.html directly in your web browser to run the application.

Code Explanation :
1.HTML (index.html) -
HTML Elements:
A. input field to enter new tasks.
B. button to add tasks.
C. ul to list tasks.
s
2.CSS (todo.css) -
A. Body: Centers the main container and sets background color.
B. Container: Styles the main content area.
C. Input Section: Flexbox layout for input and button.
D. Task List: Styles for the list items and buttons.

3.JavaScript (todo.js) -
A. DOM Content Loaded: Initializes event listeners and loads tasks.
B. Load Tasks: Retrieves tasks from local storage and displays them.
C. Save Tasks: Updates local storage with the current tasks.
D. Create Task Element: Creates and returns a new task element for the DOM.
E. Add Task: Adds a new task to the DOM and local storage.
F. Event Listeners: Listens for button clicks and keypresses to add tasks.