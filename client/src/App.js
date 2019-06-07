import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

// const store = createStore(()=> [], {}, applyMiddleware());

function App() {
  return (
      <Provider store={ store }>
          <Router>
              <div className="App">
                  <Navbar/>
                  <Route exact path="/" component={Landing} />
                  <div className="container">
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/register" component={Register}/>
                  </div>
                  <Footer/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
