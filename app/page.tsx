import React, { Suspense } from "react";
import TodoList from "./(user)/todos/TodoList";

function Home() {
  return (
    <div>
      <Suspense fallback={<h1 className="text-red-500">Loading todo</h1>}>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
      <Suspense fallback={<h1 className="text-blue-500">Loading category</h1>}>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
