import React from "react";
import { Todo } from "../../../../typings";
import { notFound } from "next/navigation";
export const dynamicParams = true;

type PageProps = {
  params: {
    // folder name
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      // no-cache: SSR, force-cache: SSG
      // cache: "no-cache",
      // Incremental Static Regeneration
      next: {
        revalidate: 60,
      },
    }
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoItem({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoItem;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // generateStaticParams must return [{todoId:'1'},{todoId:'2'}], value must be string
  return todos
    .slice(0, 10)
    .map((todo: Todo) => ({ todoId: todo.id.toString() }));
}
