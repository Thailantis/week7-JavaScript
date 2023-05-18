const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const title = titleInput.Value;
    const description = descriptionInput.value;

    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item');
    todoItem.innerHTML = `
        <h5>${title}</h5>
        <p>${description}</p>
    `;

    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('done');
    });

    todoList.appendChild(todoItem);

    titleInput.value = '';
    descriptionInput.value = '';
});
