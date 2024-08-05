import "@mantine/core/styles.css";
import { TodoListPage } from "./pages";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.fullViewport}>
      <TodoListPage></TodoListPage>
    </div>
  );
}

export default App;
