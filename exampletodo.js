let ctr = 1;
function addtodo(){
    const input = document.getElementById('input');
    const inel = input.value;
    const divElement = document.createElement('div');
    divElement.setAttribute('id', ctr);
    divElement.innerHTML=`<div>${inel}</div><button onclick=deletetodo(${ctr})>Delete</button>`;
    document.querySelector('body').appendChild(divElement);
}
function deletetodo(index){
    const element = document.getElementById(index);
    if (element) {
        element.parentNode.removeChild(element);
    }
}
//10.00.00