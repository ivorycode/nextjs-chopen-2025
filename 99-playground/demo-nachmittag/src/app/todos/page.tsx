import {NewToDo} from '@/app/todos/NewToDo';
import type {ToDo} from '@/data/ToDo';
import {ToDoList} from '@/shared/ToDoList';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import {todos} from '@/db/schema';
import {eq} from 'drizzle-orm';
import {db} from '@/db/instance';
import {Time} from '@/app/todos/Time';
import {Shared} from '@/app/todos/Shared';

export default async function TodoScreen() {

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const todoItems = await db.select().from(todos).where(eq(todos.completed, false));

  
  console.log('Rendering TodoScreen')
  return (

    <div className="w-full max-w-2xl px-4 pt-8">
      <Time>
        <Shared/>
      </Time> 
      <h2 className="text-3xl font-bold mb-6">To-Do List</h2>
      <NewToDo/>
      <ToDoList todos={todoItems}/>
    </div>
  );
}





