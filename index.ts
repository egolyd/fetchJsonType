import axios from "axios";
const url = 'https://dummyjson.com/todos/1';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}  //defines structure of an object

axios.get(url).then(res =>{
    $ touch .gitignoreconst todo = res.data as Todo;

    const id = todo.id
    const title = todo.todo
    const complete = todo.completed

    console.log(`Todo has id ${id} has a title of ${title} is it complete: ${complete}`);
    
})