async function getTodos() {
    try {
        const res = await axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos',
        });
        const todoData = res.data.slice(0, 10);
        const todotitle = [];
        const todoList = document.getElementById('todoList');
        for (let i = 0; i < todoData.length; i++) {
            todotitle[i] = todoData[i].title;
            const div = document.createElement('div');
            const span = document.createElement('span');
            const todo = document.createElement("input");
            const deleteButton = document.createElement('button')

            todo.type = 'checkbox'

            span.innerText = todotitle[i];
            deleteButton.textContent = 'X'

            div.appendChild(todo);
            div.appendChild(span);
            div.appendChild(deleteButton);
            todoList.appendChild(div);


            deleteButton.addEventListener('click', () =>{
                div.parentNode.removeChild(div)
             })
        }
    } catch (error) {
        console.error('Error: ', error)
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos();
});

function addTodo() {

}

function deleteTodo() {

}