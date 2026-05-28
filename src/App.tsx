import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";

import "./App.css";
import type { RootAppState } from "./store/store";
import Chat from "./pages/Messages/Chat/Chat";

type AppProps = {
  rootState: RootAppState,
  updateNewPostText: (text: string) => void,
  addNewPost: (postText: string) => void,
};

function App({ rootState, updateNewPostText, addNewPost }: AppProps) {
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
                updateNewPostText={updateNewPostText}
                addNewPost={addNewPost}
              />
            }
          />
          <Route path="messages" element={<Messages {...rootState.messagesPage} />}>
            <Route path=":chatId" element={<Chat messagesData={rootState.messagesPage.messages} />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App;
