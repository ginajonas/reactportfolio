import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
