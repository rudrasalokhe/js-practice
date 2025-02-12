let ctr =1 ;

function addToDo(){
    const input = document.getElementById('todoadd');
    const value = input.value;

    const divElement = document.createElement('div');
    divElement.setAttribute("id", ctr);
    divElement.innerHTML = `<div>${value}</div><button onclick='deletetodo(${ctr})'>Delete</button>`;
    document.querySelector('body').appendChild(divElement);
    ctr = ctr + 1;
    input.value = '';
}
function deletetodo(index) {
    const element = document.getElementById(index);
    if (element) {
        element.parentNode.removeChild(element);
    }
}