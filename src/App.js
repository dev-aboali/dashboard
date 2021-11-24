import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import "./app.css"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>

            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
