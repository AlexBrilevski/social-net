import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import MessagesContainer from "./pages/Messages/MessagesContainer";
import ChatContainer from "./pages/Messages/Chat/ChatContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="login" element={<SignIn />} />
          <Route
            path="profile/*"
            element={
              <ProfileContainer />
            }
          />
          <Route path="messages" element={<MessagesContainer />}>
            <Route
              path=":chatId"
              element={
                <ChatContainer />
              }
            />
          </Route>
          <Route path="users" element={<UsersContainer />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
