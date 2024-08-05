import { Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ToDoListHeader } from "../../constants";
import styles from "./styles.module.css";
import AddTaskSection from "../addTaskSection/addTaskSection.tsx";

export interface IHeaderWithAddButtonData {}

const HeaderWithAddButton = (data: IHeaderWithAddButtonData) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={styles.headerWithAddButton}>
        <Flex justify="flex-start" align="center" direction="column" gap="xl">
          <Title order={1}>{ToDoListHeader}</Title>
        </Flex>
        <AddTaskSection />
      </div>
    </>
  );
};

export default HeaderWithAddButton;
