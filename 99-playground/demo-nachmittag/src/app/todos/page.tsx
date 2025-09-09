import {NewToDo} from '@/app/todos/NewToDo';
import type {ToDo} from '@/data/ToDo';
import {ToDoList} from '@/shared/ToDoList';

export default async function TodoScreen() {

  const todos: ToDo[] = [
    {id: 1, title: "Buy groceries", completed: false},
    {id: 2, title: "Call dentist", completed: false},
    {id: 3, title: "Fix the bike", completed: true},
  ];

  console.log('Rendering TodoScreen')
  return (

    <div className="w-full max-w-2xl px-4 pt-8">
      <h2 className="text-3xl font-bold mb-6">To-Do List</h2>
      <NewToDo/>
      <ToDoList todos={todos}/>
    </div>
  );
}





