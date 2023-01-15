// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Run } from './pages/components/backend/api';


// App Imports
import { Routes, Route, BrowserRouter } from "react-router-dom";
    import Index from './pages/Index';
    import Service from './pages/Service';
    import About from './pages/About';
    import Blogs from './pages/Blogs';
    import Contact from "./pages/Contact"
    import Contract from './pages/Contract';
    import Signup from './pages/Signup';
    import Product from './pages/Product';
    import Products from './pages/Products';
    import Profile from './pages/Profile';

// Style Imports
import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
Run();
root.render(

    <ChakraProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />}/> 
            <Route path="*" element={<Index />}/> 
            <Route path="/About" element={<About />}/> 
            <Route path="/Signup" element={<Signup />}/> 
            <Route path="/Contact" element={<Contact />}/> 
            <Route path="/Contract" element={<Contract />}/> 
            <Route path="/Product" element={<Product />}/> 
            <Route path="/Products" element={<Products />}/> 
            <Route path="/Profile" element={<Profile />}/>
        </Routes>
        </BrowserRouter>
    </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

