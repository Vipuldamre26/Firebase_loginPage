import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Homepage from './components/Homepage.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignIn  />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

)
