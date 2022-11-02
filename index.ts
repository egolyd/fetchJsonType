import axios from "axios";
const url = 'https://dummyjson.com/todos/1';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}  //defines structure of an object

axios.get(url).then(res =>{
    const todo = res.data as Todo;

    const id = todo.id
    const title = todo.todo
    const completed = todo.completed
    
    logTodo(id,title,completed)
    
})

const logTodo =(id:number, title:string, completed:boolean) =>{
    console.log(`Todo has id ${id} has a title of ${title} is it complete: ${completed}`);

}