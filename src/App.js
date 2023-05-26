// import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Heder/Header';
import { Navigation } from './Component/Navbar/Navigation';
import { Container } from './Component/Navbar/Container';
import { Helmet } from 'react-helmet';
import "./CSS/Container.css"
import {Routes, Route } from "react-router-dom";
import { About } from './Component/Navbar/About';
import { Resume } from './Component/Navbar/Resume';
import { Contact } from './Component/Navbar/Contact';


function App() {
  return (
    <div>
       <Helmet>
            <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/css/johndoe.css"/>
      </Helmet>
       <Header/>
       <Navigation/>
       <Routes>
          <Route path="/" element={<Container/>} />
          <Route path="/container" element={<Container/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
