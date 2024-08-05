import { Button, Flex, Title } from "@mantine/core";
import { IoMdAddCircle } from "react-icons/io";

import { AddButtonLabel, IconSize, ToDoListHeader } from "../../constants";
import styles from "./styles.module.css";

export interface IHeaderWithAddButtonData {}

export const HeaderWithAddButton = (data: IHeaderWithAddButtonData) => {
  return (
    <div className={styles.headerWithAddButton}>
      <Flex justify="flex-start" align="flex-start" direction="column" gap="xl">
        <Title order={1}>{ToDoListHeader}</Title>
        <Button leftSection={<IoMdAddCircle size={IconSize} />}>
          {AddButtonLabel}
        </Button>
      </Flex>
    </div>
  );
};
