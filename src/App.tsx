import { Routes, Route } from "react-router-dom";
import type { RootState, RootAction } from "./store/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import Chat from "./pages/Messages/Chat/Chat";

import "./App.css";

type AppProps = {
  rootState: RootState,
  dispatch: (action: RootAction) => void,
};

function App({
  rootState,
  dispatch,
}: AppProps) {
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
              <Profile
                {...rootState.profilePage}
                dispatch={dispatch}
              />
            }
          />
          <Route path="messages" element={<Messages {...rootState.messagesPage} />}>
            <Route
              path=":chatId"
              element={
                <Chat
                  messagesData={rootState.messagesPage.messages}
                  dispatch={dispatch}
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
