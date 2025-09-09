import {NewToDo} from '@/app/todos/NewToDo';
import {ToDoList} from '@/shared/ToDoList';
import {drizzle} from 'drizzle-orm/better-sqlite3';
import {todos} from '@/db/schema';
import {eq} from 'drizzle-orm';
import {db} from '@/db/instance';

export default async function DoneScreen() {

  
  const todoItems = await db.select().from(todos).where(eq(todos.completed, true));

  console.log('Rendering  DoneScreen')
  return (

    <div className="w-full max-w-2xl px-4 pt-8">
      <h2 className="text-3xl font-bold mb-6">To-Do List</h2>
      <ToDoList todos={todoItems}/>
    </div>
  );
}
