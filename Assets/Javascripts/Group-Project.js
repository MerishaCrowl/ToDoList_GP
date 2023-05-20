document.addEventListener('DOMContentLoaded', function() {
  const todoInput = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  addBtn.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const listItem = document.createElement('li');
      listItem.innerText = todoText;

      const completeBtn = document.createElement('INPUT');
      completeBtn.setAttribute("type", "checkbox");
      //completeBtn.innerText = 'Complete';
      completeBtn.className = 'complete-btn';

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'X';
      deleteBtn.className = 'delete-btn';

      listItem.appendChild(completeBtn);
      listItem.appendChild(deleteBtn);
      todoList.appendChild(listItem);
      todoInput.value = '';
    }
  });

  todoList.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('delete-btn')) {
      const listItem = targetElement.parentNode;
      listItem.remove();
    } else if (targetElement.classList.contains('complete-btn')) {
      const listItem = targetElement.parentNode;
      listItem.classList.toggle('completed');
    }
  });
});