const form = document.querySelector('form');
const pendingTaskList = document.querySelector('.pending-task-list');
const completedTaskList = document.querySelector('.completed-task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.querySelector('input[type="text"]');

  const left = document.createElement('div');
  const right = document.createElement('div');

  const task = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.classList.add("task-text")

  const deleteButton = document.createElement('button');
  deleteButton.classList.add("dlt-btn");
  const editButton = document.createElement('button');
  editButton.classList.add("dlt-btn");

  const checkbox = document.createElement('input');

  taskText.textContent = input.value;
  deleteButton.innerHTML ='<i class="fa fa-trash"></i>';
  editButton.innerHTML = '<i class="fa fa-edit"></i>';

  checkbox.type = 'checkbox';

  left.appendChild(checkbox);
  left.appendChild(taskText);
  right.appendChild(editButton);
  right.appendChild(deleteButton);

  task.appendChild(left);
  task.appendChild(right);

  // task.appendChild(checkbox);
  // task.appendChild(taskText);
  // task.appendChild(editButton);
  // task.appendChild(deleteButton);
  pendingTaskList.appendChild(task);

  input.value = '';

  deleteButton.addEventListener('click', function() {
      task.remove();
  });

  editButton.addEventListener('click', function() {
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = taskText.textContent;
      left.replaceChild(editInput, taskText);
      editInput.focus();

      editInput.addEventListener('blur', function() {
          taskText.textContent = editInput.value;
          left.replaceChild(taskText, editInput);
      });

      editInput.addEventListener('keydown', function(e) {
          if (e.keyCode === 13) {
              taskText.textContent = editInput.value;
              left.replaceChild(taskText, editInput);
          }
      });
  });

  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          task.classList.add('completed');
          completedTaskList.appendChild(task);
      } else {
          task.classList.remove('completed');
          pendingTaskList.appendChild(task);
      }
  });
});
