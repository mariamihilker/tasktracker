//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//Eventlisteners
todoButton.addEventListener('click',addTodo); 
todoList.addEventListener('click',deleteCheck);


//Functions

//Add todo
function addTodo(e) {
    e.preventDefault();

    //add div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    if(todoInput.value != 0) {
        //get input value
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo);
        //checkButton
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton);
        
        //remove Button
        const trashdButton = document.createElement('button')
        trashdButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashdButton.classList.add('trash-btn')
        todoDiv.appendChild(trashdButton);

        //add item in ul
        todoList.appendChild(todoDiv)
        todoInput.value = '';
}
}

//delete and check item

function deleteCheck(e) {
    let item = e.target;

    //delete
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    //checkark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}