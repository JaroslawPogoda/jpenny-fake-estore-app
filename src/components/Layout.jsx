import React,{useState,useEffect,useReducer,createContext,useContext} from "react";
import {  Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import getDataAllProducts from '../functions/getDataAllProducts'
import getDataAllCategory from "../functions/getDataAllCategory";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Login from "./Login/Login";
import cartReducer from "../functions/cartReducer";
import Checkout from './Checkout/Checkout'
import './Layout.css'
export const CatContext= React.createContext();
export const CartStateContext = createContext()
export const CartDispatchContext = createContext()

export default function Layout(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setAllCategory] = useState([])
  const [cart,dispatchCart]=useReducer(cartReducer,{products:[],userToken:null});
  useEffect(() => {
    getDataAllProducts(setAllProducts);
    getDataAllCategory(setAllCategory);
    // createUser()
    // getUser()
  }, []);
  
  return (
    <div className="Layout">
      <CatContext.Provider value={{categories:categories, setCategories:setAllCategory}}>
      <CartStateContext.Provider value={{cart:cart,dispatchCart:dispatchCart}}>
      <Header />
      <div className="body-parts">
      <Routes>
        <Route path={""} element={<Products allProducts={allProducts} />} />
        <Route path={"products"} element={<Products allProducts={allProducts} />} />
        <Route path={"register"} element={<Register/>}/>
        <Route path={"login"} element={<Login/>}/>
        <Route path={"checkout"} element={<Checkout/>}/>
      </Routes>
      </div>
      <Footer/>
      </CartStateContext.Provider>
      </CatContext.Provider>
      </div>
  );
}






