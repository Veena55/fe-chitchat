import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar/Navbar.jsx';
import { Path } from './routes/Path.jsx';
import './utils/axiosConfig.js';

// Create a new QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {Path.map((route) => <Route path={route.path} element={route.element} key={route.name} />)}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>,
)
