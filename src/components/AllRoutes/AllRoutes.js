import { Routes,Route } from "react-router-dom";
import Home from "../Home/Home";

import Header from "../Header";
import Footer from "../Footer";
import ProductDetails from "../products/ProductDetails";
import Register from "../Register";
import Login from "../Login";
import { CartPage } from "../../cart/CartPage";
import ProtectedCart from "../../cart/ProtectedCart";
import { OrderPage } from "../../assets/order/OrderPage";
import { DashboardPage } from "../../DashBoard/DashboardPage";
import { PageNotFound } from "../PageNotFound";
import { ProductsList } from "../products/ProductList";

const AllRoutes = () => {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/CartPage" element={<ProtectedCart><CartPage/></ProtectedCart>}/>
        <Route path="/order-summary" element={<ProtectedCart><OrderPage/></ProtectedCart>}/>
        <Route path="/dashboard" element={<ProtectedCart><DashboardPage /></ProtectedCart>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
};

export default AllRoutes
