import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Layout from './pages/layout/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from './pages/home/home';
import BookOnline from './pages/bookOnline/bookOnline';
import Gallery from './pages/gallery/gallery';
import Layout from './pages/layout/layout';
import Faqs from './pages/faqs/faqs'
import Emails from './pages/email/email';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/contact/contact';

const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/bookOnline" element={<BookOnline />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/emails" element={<Emails />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();
