import { ReactNode, useEffect, useState } from "react";
import { AppContext, IAppContext } from "./appContext.tsx";
import { getToDoTasks } from "../services/getToDoTasks.ts";
import { IToDoTask } from "../services/models.ts";

export interface IAppContextProvider {
  children: ReactNode;
}

export const AppContextProvider = (data: IAppContextProvider) => {
  const [todoTasks, setTodoTasks] = useState<IToDoTask[]>([]);
  const [taskError, setTaskError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTodoTasks(getToDoTasks());
  }, []);

  const sendTaskHandler = (task: string, description?: string) => {
    setTodoTasks((prev) => {
      const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      const newTask: IToDoTask = {
        id: newId,
        value: task,
        description: description,
        isDone: false,
      };
      return [...prev, newTask];
    });
  };

  const ctx: IAppContext = {
    todoTasks: todoTasks,
    taskError: taskError,
    setTaskError: setTaskError,
    sendTask: sendTaskHandler,
  };

  return <AppContext.Provider value={ctx}>{data.children}</AppContext.Provider>;
};
