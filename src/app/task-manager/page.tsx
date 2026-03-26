"use client";

import { useEffect, useState } from "react";
import TodoList, { type Todo } from "@/components/TodoList";

const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos?_limit=12";

export default function TaskManagerPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  useEffect(() => {
    async function loadTodos() {
      try {
        const response = await fetch(TODOS_ENDPOINT);

        if (!response.ok) {
          setTodos([]);
          return;
        }

        const data = (await response.json()) as Todo[];
        setTodos(data);
      } catch {
        setTodos([]);
      } finally {
        setLoading(false);
      }
    }

    void loadTodos();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "completed") {
      setFilteredTodos(todos.filter((t) => t.completed));
    } else {
      setFilteredTodos(todos.filter((t) => !t.completed));
    }
  }, [filter, todos]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-16">
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Funcionalidad Task Manager
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Lista de tareas cargadas desde un endpoint. Solo recibe la respuesta y
          la renderiza.
        </p>

        <div className="mt-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="mb-4 border border-zinc-300 rounded px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="all">Todas</option>
            <option value="pending">Pendientes</option>
            <option value="completed">Completadas</option>
          </select>

          {loading ? (
            <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
              Cargando tareas...
            </div>
          ) : (
            <TodoList todos={filteredTodos} />
          )}
        </div>
      </section>
    </div>
  );
}