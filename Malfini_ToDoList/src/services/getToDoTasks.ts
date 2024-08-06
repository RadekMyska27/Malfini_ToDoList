import { IToDoTask } from "./models.ts";

export const getToDoTasks = (): IToDoTask[] => {
  //There should be a call to the backend to get data regarding todo tasks. For this demo, dummy data is returned.

  return DummyTasks;
};

const DummyTasks: IToDoTask[] = [
  {
    id: 1,
    value: "Grocery Shopping",
    description: "Buy milk, bread, and eggs from the store",
    isDone: false,
  },
  {
    id: 2,
    value: "Workout",
    description: "Complete a 30-minute cardio session",
    isDone: false,
  },
  {
    id: 3,
    value: "Read Book",
    isDone: true,
  },
];
