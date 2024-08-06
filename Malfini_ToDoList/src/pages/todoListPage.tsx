import { Center, Flex, Space } from "@mantine/core";
import ToDosList from "../components/toDosList/toDosList.tsx";
import AppHeader from "../components/headerWithAddButton/appHeader.tsx";
import AddTaskSection from "../components/addTaskSection/addTaskSection.tsx";
import styles from "./styles.module.css";

const TodoListPage = () => {
  return (
    <Center>
      <Flex
        className={styles.flexContainer}
        gap={"xl"}
        justify={"flex-start"}
        align={"center"}
        direction="column"
        wrap="nowrap"
      >
        <AppHeader />
        <AddTaskSection />
        <Space h="xs" />
        <ToDosList />
      </Flex>
    </Center>
  );
};

export default TodoListPage;
