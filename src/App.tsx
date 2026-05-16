import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Profile />
      </main>
    </>
  )
}

export default App;
