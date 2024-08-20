import { Accordion, Center, Checkbox } from "@mantine/core";
import { IToDoTask } from "../../services/models.ts";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../slices/store.ts";
import { markAsDone } from "../../slices/taskSlice.ts";

const ToDosList = () => {
  return (
    <Center className={styles.todoList}>
      <Accordion className={styles.task} variant="separated" multiple>
        <TodoTasks />
      </Accordion>
    </Center>
  );
};

export default ToDosList;

const TodoTasks = () => {
  const state = useSelector((state: RootState) => state.task);

  return state.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <AccordionControl todoTask={item} />
      <AccordionPanel description={item.description} />
    </Accordion.Item>
  ));
};

const AccordionControl = (data: { todoTask: IToDoTask }) => {
  const dispatch = useDispatch();

  const task = data.todoTask;

  return (
    <Center className={styles.accordionControl}>
      <Checkbox
        checked={task.isDone}
        onChange={() => {
          dispatch(markAsDone(task));
        }}
      />
      <Accordion.Control disabled={task.isDone}>{task.value}</Accordion.Control>
    </Center>
  );
};

const AccordionPanel = (data: { description?: string }) => {
  return <Accordion.Panel>{data.description}</Accordion.Panel>;
};
