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


            deleteButton.addEventListener('click', () => {
                div.parentNode.removeChild(div)
            })

            todo.addEventListener('change', () => {
                if (todo.checked) {
                    div.style.textDecoration = 'line-through'
                    div.style.color = "red"
                } else {
                    div.style.textDecoration = ''
                    div.style.color = ''
                }

            })



        }
        const form = document.getElementById('form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const todoInput = document.getElementById('add');

            console.log(todoInput.value); // 입력된 값

            const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

            if (newTodo !== "") {
                const div = document.createElement('div');
                const span = document.createElement('span');
                const todo = document.createElement("input");
                const deleteButton = document.createElement('button');

                todo.type = 'checkbox'


                span.innerText = newTodo;
                deleteButton.textContent = 'X'

                div.appendChild(todo);
                div.appendChild(span);
                div.appendChild(deleteButton);
                todoList.appendChild(div);


                deleteButton.addEventListener('click', () => {
                    div.parentNode.removeChild(div)
                })

                todo.addEventListener('change', () => {
                    if (todo.checked) {
                        div.style.textDecoration = 'line-through'
                        div.style.color = "red"
                    } else {
                        div.style.textDecoration = ''
                        div.style.color = ''
                    }

                })

            }

            // // input 창 초기화
            todoInput.value = '';
        })
    } catch (error) {
        console.error('Error: ', error)
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos();
});



// function addTodo() {
//     let add = document.getElementById('add').value;
//     console.log('test');
// }

function deleteTodo() {

}