import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import "./app.css"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUSer from "./pages/NewUser/NewUSer";
import ProductList from "./pages/productList/ProductList";
import Product from "./components/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
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
            <Route path="/newUser" element={<NewUSer />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
