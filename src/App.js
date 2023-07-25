import './css/bootstrap.min.css'
import './css/owl.carousel.min.css'
import './css/magnific-popup.css'
import './css/font-awesome.min.css'
import './css/themify-icons.css'
import './css/gijgo.css'
import './css/nice-select.css'
import './css/animate.css'
import './css/flaticon.css'
import './css/slicknav.css'
import './css/style.css'
import Header from './components/header';
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/home/Home';
import Login from './Pages/signup/SignUp';
import Performer from './Pages/performers/performer';
import Contact from './Pages/contact/contact';
import AddEvent from './Pages/addEvent/AddEvent';
import Dashboard from './Pages/Dashboard/Dashboard';
import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {
  const [checkLocal, setcheckLocal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.post('http://localhost:5000/user/verify', {
        token: localStorage.getItem('token')
      })
        .then(response => {
          setcheckLocal(response.data.email)
        })
        .catch(error => {

        })
    } else {
      setcheckLocal(false);
    }
  })

  return (
    <div>
      <BrowserRouter>
        <Header checkLocal={checkLocal} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/performers" element={<Performer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
