import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IToDoTask } from "../services/models.ts";
import { getToDoTasks } from "../services/getToDoTasks.ts";

const initialState: IToDoTask[] = getToDoTasks();

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IToDoTask>) => {
      const newId = state.length > 0 ? state[state.length - 1].id + 1 : 1;

      return [...state, { ...action.payload, id: newId, isDone: false }];
    },
    markAsDone: (state, action: PayloadAction<IToDoTask>) => {
      const payloadTask = action.payload;

      return state.map((todoTask) => {
        return payloadTask.id === todoTask.id
          ? { ...todoTask, isDone: true }
          : todoTask;
      });
    },
  },
});

export const { add, markAsDone } = taskSlice.actions;
export default taskSlice.reducer;
