import "@mantine/core/styles.css";
import { TodoListPage } from "./pages";
import styles from "./App.module.css";
import { AppContextProvider } from "./context/appContextProvider.tsx";

function App() {
  return (
    <div className={styles.fullViewport}>
      <AppContextProvider>
        <TodoListPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
