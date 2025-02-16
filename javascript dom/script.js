let todo = [];

function addtodo() {
  const input = document.querySelector('input');
  todo.push({
    title: input.value
  });
  input.value = ''; // Clear input after adding
  render();
}

function deleteTodo(index) {
  todo.splice(index, 1);
  render();
}

function render() {
  const container = document.querySelector('#todo-container');
  container.innerHTML = '';
  for (let i = 0; i < todo.length; i++) {
    const todos = todo[i];
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const button = document.createElement('button');
    button.innerHTML = "Delete";
    button.onclick = () => deleteTodo(i); // Add delete handler
    h1.innerHTML = todos.title;
    div.appendChild(h1);
    div.appendChild(button);
    container.appendChild(div);
  }
}