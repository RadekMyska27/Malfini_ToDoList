import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import TodoListPage from "./pages/todoListPage.tsx";
import { store } from "./slices/store.ts";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.fullViewport}>
      <Provider store={store}>
        <TodoListPage />
      </Provider>
    </div>
  );
}

export default App;
