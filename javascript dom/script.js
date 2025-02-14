function addToDo(){
    const value = document.getElementById('todoadd').value;
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerHTML=value;
    button.innerHTML="Button";
    const divel = document.createElement('div');
    divel.appendChild(span);
    divel.appendChild(button);
    document.querySelector('body').appendChild(divel);
}
