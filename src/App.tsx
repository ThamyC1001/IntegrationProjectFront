import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegisterUser from './pages/register/RegisterUser';
import './App.css';
import store from './store/store';
    

function App() {
    useEffect(() => {
        document.title = "Greeniverse";
    }, []);

    return (

  
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/registeruser' element={<RegisterUser />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    
                </Routes>

            </Router>
        </Provider>

    )
}

export default App;