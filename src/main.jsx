<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Anouncementbar from './Components/anouncementbar/announcmentbar'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/hero'
import Brandbar from './Components/Brandsbar/brandbar'
import Products from './Components/mainproducts/products'
import Card from './Components/Productcard/productcard'
import DressStyle from './Components/Dress Style/dressstyle'
import HappyCustomers from './Components/Reviews/Reviews'
import Newsletter from './Components/News/Newsletters'
import Footer from './Components/Footer/Footer'
import ReactDOM from "react-dom/client";
import ProductPage from "./Pages/Product Page/ProductPage"
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import CategoryPage from './Pages/Category/CategoryPage'
import { CartProvider } from "./context/CartContext";
import Cart from './Pages/Cart/Cart'
import Items from "../data"



function Home(){
  return (
  
    <>
  <Anouncementbar/>
  <Nav/>
  <Hero/>
  <Brandbar/>
  <Products heading="NEW ARRIVALS"/>
  <Products heading="TOP SELLING"/>
  <DressStyle/>
  <HappyCustomers/>
  <Newsletter/>
  <Footer/>
    </>
  

  )
}

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter basename="/SHOPE.CO-React-Application-Assignment">
<CartProvider>
      <Routes>
        <Route
        path="/"
        element={<Home/>}
        />
        
        <Route
          path="/product/:id"
          element={<ProductPage/>}
        />
        <Route
        path="/category/"
        element={<CategoryPage/>}
        />
        <Route
        path="/cart/"
        element={<Cart/>}
        />
      </Routes>
</CartProvider>
    </BrowserRouter>
  </>
)
=======

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { store } from "./redux/store";

import Anouncementbar from "./Components/anouncementbar/announcmentbar";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/hero";
import Brandbar from "./Components/Brandsbar/brandbar";
import Products from "./Components/mainproducts/products";
import DressStyle from "./Components/Dress Style/dressstyle";
import HappyCustomers from "./Components/Reviews/Reviews";
import Newsletter from "./Components/News/Newsletters";
import Footer from "./Components/Footer/Footer";

import ProductPage from "./Pages/Product Page/ProductPage";
import CategoryPage from "./Pages/Category/CategoryPage";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile/Profile";

import CartInitializer from "./Components/CartInitializer";
import AuthInitializer from "./Components/AuthInitializer";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";

function Home() {
  return (
    <>
      <Anouncementbar />
      <Nav />
      <Hero />
      <Brandbar />
      <Products heading="NEW ARRIVALS" />
      <Products heading="TOP SELLING" />
      <DressStyle />
      <HappyCustomers />
      <Newsletter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/SHOPE.CO-React-Application-Assignment">

        {/* Check authentication first */}
        <AuthInitializer />

        {/* Load and synchronize cart */}
        <CartInitializer />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
>>>>>>> de2a868 (Made backend and update cart and profile)
