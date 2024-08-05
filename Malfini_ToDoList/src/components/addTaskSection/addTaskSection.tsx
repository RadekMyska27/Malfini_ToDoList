import { Button, Flex, Group, TextInput } from "@mantine/core";
import {
  AddButtonLabel,
  AddTaskTitle,
  IconSize,
  TaskDescription,
} from "../../constants";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../context/appContext.tsx";

export interface IAddTaskSectionData {}

const AddTaskSection = (data: IAddTaskSectionData) => {
  const { setTaskError } = useAppContext();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState<string | undefined>(undefined);

  const setTaskHandle = (task: string) => {
    if (task === "") {
      setTaskError();
      return;
    }

    setTask(task);
  };

  return (
    <Flex gap="md" justify="flex-start" align="flex-start" direction="column">
      <Group justify="flex-start">
        <TaskInput setTask={setTaskHandle} />
        <TaskDescriptionInput setDescription={setDescription} />
      </Group>
      <AddTaskButton task={task} description={description} />
    </Flex>
  );
};

const TaskInput = (data: { setTask: (task: string) => void }) => {
  const { taskError } = useAppContext();

  return (
    <TextInput
      label={AddTaskTitle}
      withAsterisk
      onChange={(event) => data.setTask(event.currentTarget.value)}
      error={taskError}
    />
  );
};

const TaskDescriptionInput = (data: {
  setDescription: (description: string) => void;
}) => {
  return (
    <TextInput
      label={TaskDescription}
      onChange={(event) => data.setDescription(event.currentTarget.value)}
    />
  );
};

const AddTaskButton = (data: { task: string; description?: string }) => {
  const { sendTask } = useAppContext();

  return (
    <Button leftSection={<IoMdAddCircle size={IconSize} />} onClick={sendTask}>
      {AddButtonLabel}
    </Button>
  );
};

export default AddTaskSection;
