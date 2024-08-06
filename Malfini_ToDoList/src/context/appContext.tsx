﻿import { createContext, useContext } from "react";
import { IToDoTask } from "../services/models.ts";

export interface IAppContext {
  todoTasks: IToDoTask[];
  taskError?: string;

  sendTask: (task: string, description?: string) => void;
  markTaskAsDone: (id: number) => void;
  setTaskError: (error?: string) => void;
}

export const AppContext = createContext<IAppContext>({
  taskError: undefined,
  todoTasks: [],
  sendTask: () => {},
  markTaskAsDone: () => {},
  setTaskError: () => {},
});

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
