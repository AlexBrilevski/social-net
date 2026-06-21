import { createContext, type FC, type PropsWithChildren } from "react";
import type { RootStore } from "./store";

export const StoreContext = createContext({} as RootStore);

type ProviderProps = {
  store: RootStore
};

export const StoreContextProvider: FC<PropsWithChildren<ProviderProps>> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};