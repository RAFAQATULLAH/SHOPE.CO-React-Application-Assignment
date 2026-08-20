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
