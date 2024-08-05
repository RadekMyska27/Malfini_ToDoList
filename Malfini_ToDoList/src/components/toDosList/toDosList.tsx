import { Accordion, Center, Checkbox } from "@mantine/core";

import styles from "./styles.module.css";

export interface IToDosListData {}

const ToDosList = (data: IToDosListData) => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <AccordionControl value={item.value} />
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

// interface IAccordionControl {
//   todoItem: {
//     value: string;
//   };
// }

const AccordionControl = (data: { value: string }) => {
  return (
    <Center className={styles.accordionControl}>
      <Checkbox></Checkbox>
      <Accordion.Control loop={false}>{data.value}</Accordion.Control>
    </Center>
  );
};

const AccordionPanel = (data: { description }) => {
  return <Accordion.Panel>{data.description}</Accordion.Panel>;
};

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];
