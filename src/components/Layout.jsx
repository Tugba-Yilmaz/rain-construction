// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;