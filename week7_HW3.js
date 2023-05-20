const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;

    const todoItem = {
        title: title,
        description: description,
        done: false
    };

    const todoItemElement = document.createElement('li');
    todoItemElement.innerHTML = `
        <span class="title">${todoItem.title}</span>
        <span class="description>${todoItem.description}</span>
    `;
    todoList.appendChild(todoItemElement);

    todoItemElement.addEventListener('click', function() {
        if (todoItem.done) {
            this.remove();
        } else {
            this.classList.add('done');
            todoItem.done = true;
        }
    });
    todoForm.reset();
});
