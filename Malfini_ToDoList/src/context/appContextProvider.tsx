import { ReactNode } from "react";
import { AppContext, IAppContext } from "./appContext.tsx";

export interface IAppContextProvider {
  children: ReactNode;
}

export const AppContextProvider = (data: IAppContextProvider) => {
  const ctx: IAppContext = {};

  return <AppContext.Provider value={ctx}>{data.children}</AppContext.Provider>;
};
