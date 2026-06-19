import { Routes, Route } from "react-router-dom";
import type { RootStore } from "./store/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import MessagesContainer from "./pages/Messages/MessagesContainer";
import ChatContainer from "./pages/Messages/Chat/ChatContainer";

import "./App.css";

type AppProps = {
  store: RootStore,
};

function App({ store }: AppProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="login" element={<SignIn />} />
          <Route
            path="profile"
            element={
              <ProfileContainer store={store} />
            }
          />
          <Route path="messages" element={<MessagesContainer store={store} />}>
            <Route
              path=":chatId"
              element={
                <ChatContainer store={store} />
              }
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App;
