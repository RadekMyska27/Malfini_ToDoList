import { IToDoTasks } from "./models.ts";

export const getToDoTasks = (): IToDoTasks[] => {
  //There should be a call to the backend to get data regarding todo tasks. For this demo, dummy data is returned.

  return DummyTasks;
};

const DummyTasks: IToDoTasks[] = [
  {
    id: 1,
    value: "Grocery Shopping",
    description: "Buy milk, bread, and eggs from the store",
    isActive: true,
  },
  {
    id: 2,
    value: "Workout",
    description: "Complete a 30-minute cardio session",
    isActive: false,
  },
  {
    id: 3,
    value: "Read Book",
    isActive: true,
  },
];
