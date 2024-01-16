import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Layout from './pages/layout/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from './pages/home/home';
import Pages from './pages/pages/pages';
import BookOnline from './pages/bookOnline/bookOnline';
import Gallery from './pages/gallery/gallery';
import ContactUs from './pages/layout/email';
import Layout from './pages/layout/layout';
import Faqs from './pages/faqs/faqs'


const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/contact-us" element={<Pages />} />
        <Route exact path="/bookOnline" element={<BookOnline />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/emails" element={<ContactUs />} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();
