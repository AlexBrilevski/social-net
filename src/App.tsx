import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="login" element={<SignIn />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
