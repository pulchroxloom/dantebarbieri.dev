import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/top-level/Footer';
import Navbar from './components/top-level/Navbar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Work from './routes/Work';
import { theme } from './utils/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {window.location.pathname !== '/' && ( <Navbar /> )}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
