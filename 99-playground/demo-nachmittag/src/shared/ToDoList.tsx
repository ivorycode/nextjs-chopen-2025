import type {ToDo} from '@/data/ToDo';

type ToDoListProps = {
  todos: ToDo[]
}
export async function ToDoList({todos}: ToDoListProps) {

  return (
    <div>
      {todos.map(t => (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <span className="text-lg">{t.title}</span>
            <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition">X</button>
          </div>
        </div>
      ))}
    </div>
  );
}