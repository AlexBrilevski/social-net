import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { StoreContextProvider } from "./store/StoreContext.tsx";

const root = createRoot(document.getElementById("root")!);

const rerenderDomTree = () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <StoreContextProvider store={store}>
          <App />
        </StoreContextProvider>
      </BrowserRouter>
    </StrictMode>,
  );
};

rerenderDomTree();
store.subscribe(rerenderDomTree);
