import React from 'react';
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/'
        element={<Home />}></Route>

        <Route path='/gallery'
        element={<Gallery />}></Route>

        <Route path='/about'
        element={<About />}></Route>

        <Route path='/contact'
        element={<Contact />}></Route>

        <Route path='/login'
        element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App;