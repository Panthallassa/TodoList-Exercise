
document.addEventListener('DOMContentLoaded', function() {
    loadListItems();
});



function addList() {

const input = document.querySelector('#new-todo');
const inputValue = input.value;

    if (inputValue !== "") {
        const list = document.querySelector('#list'); 
        const newItem = document.createElement('li');
        newItem.textContent = inputValue;
        newItem.classList.add('item');

        newItem.addEventListener('click', function(e) {
            e.target.classList.toggle('strikeThrough');
            saveListItems();
        });

        newItem.addEventListener('dblclick', function(e) {
            e.target.parentNode.removeChild(e.target);
            saveListItems();
        });


        list.appendChild(newItem);

        input.value = '';

        saveListItems();
    }
}

function loadListItems() {
    const list = document.querySelector('#list');
    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];

    storedItems.forEach(function(itemText) {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        newItem.classList.add('item');

        newItem.addEventListener('click', function(e) {
            e.target.classList.toggle('strikeThrough');
            saveListItems();
        });

        newItem.addEventListener('dblclick', function(e) {
            e.target.parentNode.removeChild(e.target);
            saveListItems();
        });
        list.appendChild(newItem);
    });
}

    function saveListItems() {
        const listItems = Array.from(document.getElementById('list').children).map(function(item) {
                return item.textContent;
        });

        localStorage.setItem('todoItems', JSON.stringify(listItems));
    }



let listForm = document.querySelector('#addTodo');
listForm.addEventListener('submit', function(e){
    e.preventDefault();
});




