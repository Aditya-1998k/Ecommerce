import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom" //in routes and route no need add 
import Logout from "./components/logout/logout";
import Order from "./components/orders/order";
import Protected from "./components/protectedRoutes/protected";
import Item from "./components/item/item";
import Cart from "./components/cart/cart";


function App() {
  return (
    <>
      Ecommerce App Front End
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>   
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/order" element={<Protected><Order/></Protected>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
