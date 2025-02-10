function deletetodo(index){
    const element = document.getElementById('todo-'+index);
   document.getElementById('todoparent').removeChild(element);
}