import { Routes, Route } from "react-router-dom";
import type { RootStore } from "./store/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import Messages from "./pages/Messages/Messages";
import Chat from "./pages/Messages/Chat/Chat";

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
          <Route path="messages" element={<Messages {...store.getState().messagesPage} />}>
            <Route
              path=":chatId"
              element={
                <Chat
                  messagesData={store.getState().messagesPage.messages}
                  dispatch={store.dispatch}
                />
              }
            />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App;
