
// import './App.css'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import DetailsPage from './components/details/DetailsPage';
import Product from './components/product/Product';
import Login from './components/login/Login';
import ContactUs from './components/contactus/ContactUs';

function App() {
  return (
  <>
  <Router>
  <Navbar/>
    <Routes>
    
    <Route path="/" element={<HomePage/>} />
   
    <Route path="/prduct" element={<Product/>} />
    <Route path="/detailsPage" element={<DetailsPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/contact" element={<ContactUs/>} />
    </Routes>

  </Router>
  </>
  )
}

export default App
