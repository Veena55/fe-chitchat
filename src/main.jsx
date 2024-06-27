import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Verify from './components/Verify/Verify.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/verify' element={<Verify />}></Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
