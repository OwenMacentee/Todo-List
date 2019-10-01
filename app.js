addForm = document.querySelector('.add');

todoList = document.querySelector('.todos');

// Defining function which adds the todos to the list
const generateTodo = todo => {

    html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

// Adding the todo template above to the inner HTML of the todo list so that the new todo appears on the browser
    todoList.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value;

    if (todo.length){
        generateTodo(todo);
    }
    
});



// The code below deletes the todo if the user clicks on the trashcan
todoList.addEventListener('click', e => {
// the if clause is checking if the click the user has done is on the trashcan or on another part of the list item
    if(e.target.classList.contains('delete')){
// Removing list item
        e.target.parentElement.remove();
    }
});



// When applied, the function below allows the user to search for todos and filter out those todos which don't match
const filter = (searchValue) => {
    Array.from(todoList.children)t
        .filter((listItem) => !listItem.textContent.toLowerCase().includes(searchValue))
        .forEach((listItem) => listItem.classList.add('filtered'));

// The code below makes sure that once the user deletes some letters from the searchField, the class of 'filtered' is removed accordingly
    Array.from(todoList.children)
        .filter((listItem) => listItem.textContent.toLowerCase().includes(searchValue))

        .forEach((listItem)=> listItem.classList.remove('filtered'));

};

// Getting user's search and filtering the results
const searchField = document.querySelector('.form-control');
searchField.addEventListener('keyup', () => {
    const searchValue = searchField.value.toLowerCase();
    filter(searchValue);   
});