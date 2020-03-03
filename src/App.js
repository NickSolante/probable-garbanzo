import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import User from './items/User'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import EbayState from './context/Ebay/EbayState'
import './App.css'

const App = () => {
  return (
    <EbayState>
      <Router>
        <div className='App'>
          <Navbar title='Ebay Search'></Navbar>
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Home></Home>
                  </Fragment>
                )}
              ></Route>

              <Route
                exact
                path='/theproject/user/:login'
                component={User}
              ></Route>

              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </EbayState>
  )
}

export default App
