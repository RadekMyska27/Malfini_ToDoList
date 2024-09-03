import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";

import { Button, Flex, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import {
  AddButtonLabel,
  AddTaskTitle,
  IconSize,
  TaskDescription,
} from "../../constants/components.ts";
import styles from "./styles.module.css";
import { add } from "../../slices/taskSlice.ts";

const AddTaskSection = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState<string | undefined>("");

  const setTaskHandle = (task: string) => {
    setTask(task);
  };

  const clearInputs = () => {
    setTask("");
    setDescription("");
  };

  return (
    <Flex
      className={styles.addTaskSection}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="column"
    >
      <Group className={styles.taskInputGroup} justify="space-between" grow>
        <TaskInput setTask={setTaskHandle} task={task} />
        <TaskDescriptionInput
          setDescription={setDescription}
          description={description}
        />
      </Group>
      <AddTaskButton
        task={task}
        description={description}
        clearInputs={clearInputs}
      />
    </Flex>
  );
};

const TaskInput = (data: { setTask: (task: string) => void; task: string }) => {
  const form = useForm({
    initialValues: { taskName: "" },
    validate: {
      taskName: (value) =>
        value.trim().length === 0 ? "Name is required" : null,
    },
  });

  return (
    <TextInput
      value={data.task}
      label={AddTaskTitle}
      withAsterisk
      onChange={(event) => data.setTask(event.currentTarget.value)}
    />
  );
};

const TaskDescriptionInput = (data: {
  setDescription: (description: string) => void;
  description?: string;
}) => {
  return (
    <TextInput
      value={data.description}
      label={TaskDescription}
      onChange={(event) => data.setDescription(event.currentTarget.value)}
    />
  );
};

const AddTaskButton = (data: {
  task: string;
  description?: string;
  clearInputs: () => void;
}) => {
  const dispatch = useDispatch();

  return (
    <Button
      leftSection={<IoMdAddCircle size={IconSize} />}
      onClick={() => {
        dispatch(add({ value: data.task, description: data.description }));
        data.clearInputs();
      }}
      // disabled={taskError !== undefined}
    >
      {AddButtonLabel}
    </Button>
  );
};

export default AddTaskSection;
