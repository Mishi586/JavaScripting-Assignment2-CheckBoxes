document.querySelector('#btn1').addEventListener('click',(e) => {
    getCompletedTodos();
   
})

document.querySelector('#btn2').addEventListener('click',(e) => {
    let checkAll= document.querySelectorAll('input[type=checkbox]')
    checkAll.forEach(function(checkbox){
        checkbox.checked=true;
    })
})

document.querySelector('#btn3').addEventListener('click',(e) => {
    let uncheckAll= document.querySelectorAll('input[type=checkbox]')
    uncheckAll.forEach(function(checkbox){
        checkbox.checked=false;
    })
})

function getCompletedTodos()
{
    let values=[];
    checked= document.querySelectorAll('input[type="checkbox"]:checked');
    checked.forEach(chk =>values.push(chk.value));
    console.log(values);
}



window.addEventListener('DOMContentLoaded', event => {
    
    
    div_todos = document.querySelector('#todos');
    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      //for(i=0;i<10;i++)

    //div_todos.innerHTML += `<input type="checkbox" value="1" id="c1">
    //<label for="c1">Lorem ipsum dolor sit amet.</label><br />
//`; //template strings are always written in backticks
    
   todos.forEach(todo => {

    div_todos.innerHTML += 
    `<input type="checkbox" value="${todo.id}" id="${todo.id}" ${todo.completed ? "checked":"unchecked"}>
    <label for="${todo.id}"> ${todo.title} </label><br />`
    
    
   });
   
   getCompletedTodos();
   
    
   });

    });
   
   
