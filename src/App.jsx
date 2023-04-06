import TaskForm from "./components/TaskForm";
import TakList from "./components/TaskList";

import { useState, useEffect } from "react";

function Aplicacion() {
  /**celo pasa el createTask, al TaskForm */
  /**celo pasa el task, al TaskList */
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TakList />
      </div>
    </main>
  );
}

export default Aplicacion;
