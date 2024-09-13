# To-Do-App

This is a simple To-Do app developed using **React** and **Vite**. The app allows users to manage their tasks efficiently by adding, removing, checking/unchecking, searching, and filtering tasks. The app's data is stored in the browser's **LocalStorage** to preserve the tasks even after the browser is refreshed or closed.

## Features

- **Add Task**: Users can add new tasks to the task list.
- **Remove Task**: Users can delete individual tasks from the task list.
- **Check/Uncheck Task**: Users can mark tasks as completed or uncompleted by checking/unchecking them.
- **Search Task**: Users can search tasks by name in the task list.
- **Filter Tasks**:
  - **All Tasks**: Shows all tasks.
  - **Active Tasks**: Shows only active (uncompleted) tasks.
  - **Completed Tasks**: Shows only completed tasks.
- **Remove Completed Tasks**: Users can remove all completed tasks from the list.
- **Clear All Tasks**: Users can remove all tasks from the list.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server for modern web applications.
- **LocalStorage**: Browser storage for persisting task data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app.git

2. Navigate to the project directory:
   ```bash
   cd todo-app
3. Install dependencies: 
- Using npm
   ```bash
   npm install
- Or using yarn:
   ```bash
   yarn install

## Running the App
1. Start the development server:
- Using npm:

   ```bash
   npm run dev
- Or using yarn: 

   ```bash
   yarn dev 

2. Open the app in your browser:
- After starting the server, the app will be available at:
  
  ```arduino
  http://localhost:3000 
  
  
Open this URL in your browser to interact with the app.

# Building for Production
To create an optimized production build, run:

- Using npm:

   ```bash
   npm run build
- Or using yarn: 

   ```bash
   yarn build 
This will create a dist folder with the optimized build for deployment.

# Usage
- Add a Task: Type the task in the input field and click the "Add" button.
- Complete a Task: Check the checkbox next to the task to mark it as completed.
- Uncheck a Task: Uncheck the checkbox to move it back to active tasks.
- Delete a Task: Click the "Delete" button to remove the task.
- Search for Tasks: Use the search bar to filter tasks by their names.
- Filter Tasks: Use the filters to switch between All Tasks, Active Tasks, and Completed Tasks.
- Remove Completed Tasks: Click "Clear Completed" to remove all completed tasks.
- Clear All Tasks: Click "Clear All" to delete all tasks from the list.

# License
This project is licensed under the MIT License. See the LICENSE file for details.