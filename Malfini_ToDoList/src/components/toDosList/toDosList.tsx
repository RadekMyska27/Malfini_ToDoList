import { Accordion, Center, Checkbox } from "@mantine/core";

import styles from "./styles.module.css";
import { useAppContext } from "../../context/appContext.tsx";

export interface IToDosListData {}

const ToDosList = (data: IToDosListData) => {
  const { todoTasks } = useAppContext();

  const items = todoTasks.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <AccordionControl value={item.value} isDone={item.isDone} />
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

const AccordionControl = (data: { value: string; isDone: boolean }) => {
  return (
    <Center className={styles.accordionControl}>
      <Checkbox
        checked={data.isDone}
        onChange={() => {
          //TODO handler
        }}
      />
      <Accordion.Control disabled={data.isDone}>{data.value}</Accordion.Control>
    </Center>
  );
};

const AccordionPanel = (data: { description }) => {
  return <Accordion.Panel>{data.description}</Accordion.Panel>;
};
