import { createContext, useContext } from "react";

export interface IAppContext {}

export const AppContext = createContext<IAppContext>({});

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useChatAppContext must be used within an ChatAppContextProvider",
    );
  }
  return context;
};
