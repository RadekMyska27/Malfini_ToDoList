import { Center, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { ToDoListHeader } from "../../constants/components.ts";

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <Center>
        <Title order={1}>{ToDoListHeader}</Title>
      </Center>
    </div>
  );
};

export default AppHeader;
