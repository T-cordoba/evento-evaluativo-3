"use client";

import { useEffect, useMemo, useState } from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  const [items, setItems] = useState<Todo[]>(todos);

  useEffect(() => {
    setItems(todos);
  }, [todos]);

  const hasItems = useMemo(() => items.length > 0, [items.length]);

  function toggleTodo(id: number) {
    setItems((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  if (!hasItems) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
        No hay tareas para mostrar.
      </div>
    );
  }

  return (
    <ul className="grid gap-3">
      {items.map((todo) => (
        <li
          key={todo.id}
          className="flex items-start justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="flex items-start gap-3 pr-4">
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mt-1 h-4 w-4 cursor-pointer rounded border-zinc-300 text-foreground focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900"
            />

            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                #{todo.id}
              </p>
              <label
                htmlFor={`todo-${todo.id}`}
                className="mt-1 block cursor-pointer text-base font-medium text-foreground"
              >
                {todo.title}
              </label>
            </div>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              todo.completed
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
            }`}
          >
            {todo.completed ? "Completada" : "Pendiente"}
          </span>
        </li>
      ))}
    </ul>
  );
}