import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";

const root = createRoot(document.getElementById("root")!);

const rerenderDomTree = () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </StrictMode>,
  );
};

rerenderDomTree();
store.subscribe(rerenderDomTree);
