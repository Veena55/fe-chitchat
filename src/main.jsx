import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/Login/Login.jsx';
// import Verify from './components/Verify/Verify.jsx';
import { ToastContainer } from 'react-toastify';
// import Home from './pages/Home/Home.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Invite from './components/Invite/Invite.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { Path } from './routes/Path.jsx';
// Create a new QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <Route path='/signup' element={<App />} key="signup"></Route>
        <Route path='/home' element={<Home />} key="home"></Route>
        <Route path='/login' element={<Login />} key="login"></Route>
        <Route path='/verify' element={<Verify />} key="verify"></Route>
        <Route path='/invite' element={<Invite />} key="invite"></Route> */}
        {Path.map((route) => <Route path={route.path} element={route.element} key={route.name} />)}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>

  // </React.StrictMode>,
)
