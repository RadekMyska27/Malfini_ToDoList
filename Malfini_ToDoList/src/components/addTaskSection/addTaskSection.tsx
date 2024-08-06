import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import { Button, Flex, Group, TextInput } from "@mantine/core";

import { useAppContext } from "../../context/appContext.tsx";
import {
  AddButtonLabel,
  AddTaskTitle,
  IconSize,
  TaskDescription,
  TaskMandatory,
} from "../../constants/components.ts";
import styles from "./styles.module.css";

const AddTaskSection = () => {
  const { setTaskError } = useAppContext();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState<string | undefined>("");

  const setTaskHandle = (task: string) => {
    if (task === "") {
      setTaskError(TaskMandatory);
      return;
    }

    setTaskError(undefined);
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
  const { taskError } = useAppContext();

  return (
    <TextInput
      value={data.task}
      label={AddTaskTitle}
      withAsterisk
      onChange={(event) => data.setTask(event.currentTarget.value)}
      error={taskError}
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
  const { sendTask, taskError, setTaskError } = useAppContext();

  return (
    <Button
      leftSection={<IoMdAddCircle size={IconSize} />}
      onClick={() => {
        if (data.task === "") {
          setTaskError(TaskMandatory);
          return;
        }

        sendTask(data.task, data.description);
        data.clearInputs();
      }}
      disabled={taskError !== undefined}
    >
      {AddButtonLabel}
    </Button>
  );
};

export default AddTaskSection;
