import { Flex } from "@mantine/core";
import styles from "./styles.module.css";
import ToDosList from "../components/toDosList/toDosList.tsx";
import HeaderWithAddButton from "../components/headerWithAddButton/headerWithAddButton.tsx";

export interface ITodoListData {}

export const TodoListPage = (data: ITodoListData) => {
  return (
    <Flex
      className={styles.flexContainer}
      gap={"xl"}
      justify={"flex-start"}
      align={"center"}
      direction="column"
      wrap="nowrap"
    >
      <HeaderWithAddButton />
      <ToDosList />
    </Flex>
  );
};
