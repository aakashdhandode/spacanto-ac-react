import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./assets/Admin.css";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import { Component } from 'react';


class Index extends React.Component {

  render() {
    return (
        <HashRouter>
          <ScrollToTop />
          <HomePage />
        </HashRouter>
    );
  }
};

export default Index;

  

