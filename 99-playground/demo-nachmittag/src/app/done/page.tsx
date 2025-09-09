import {NewToDo} from '@/app/todos/NewToDo';
import {ToDoList} from '@/shared/ToDoList';

export default async function DoneScreen() {

  const todos = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn Next.js", completed: true },
    { id: 3, title: "Learn TypeScript", completed: true },
  ];

  return (

    <div className="w-full max-w-2xl px-4 pt-8">
      <h2 className="text-3xl font-bold mb-6">To-Do List</h2>
      <ToDoList todos={todos}/>
    </div>
  );
}
