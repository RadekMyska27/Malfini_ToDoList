﻿import { Accordion, Center, Checkbox } from "@mantine/core";

import styles from "./styles.module.css";
import { useAppContext } from "../../context/appContext.tsx";
import { IToDoTask } from "../../services/models.ts";

export interface IToDosListData {}

const ToDosList = (data: IToDosListData) => {
  const { todoTasks } = useAppContext();

  const items = todoTasks.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <AccordionControl todoTask={item} />
      <AccordionPanel description={item.description} />
    </Accordion.Item>
  ));

  return (
    <Center className={styles.todoList}>
      <Accordion
        className={styles.task}
        variant="separated"
        loop={false}
        multiple
      >
        {items}
      </Accordion>
    </Center>
  );
};

export default ToDosList;

const AccordionControl = (data: { todoTask: IToDoTask }) => {
  const { markTaskAsDone } = useAppContext();
  const task = data.todoTask;

  return (
    <Center className={styles.accordionControl}>
      <Checkbox
        checked={task.isDone}
        onChange={() => {
          markTaskAsDone(task.id);
        }}
      />
      <Accordion.Control disabled={task.isDone}>{task.value}</Accordion.Control>
    </Center>
  );
};

const AccordionPanel = (data: { description }) => {
  return <Accordion.Panel>{data.description}</Accordion.Panel>;
};
