import "@mantine/core/styles.css";

import { AppContextProvider } from "./context/appContextProvider.tsx";
import TodoListPage from "./pages/todoListPage.tsx";
import styles from "./App.module.css";

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
