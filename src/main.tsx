import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/_store.ts";

const root = createRoot(document.getElementById("root")!);

const rerenderDomTree = () => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App
          rootState={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </StrictMode>,
  );
};

rerenderDomTree();
store.subscribe(rerenderDomTree);
