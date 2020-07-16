import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Views/Home'
import About from './Views/Dashboard'
import Visitor from './Views/Visitor'


function App() {
  return (
    <div className="relative pb-10 min-h-screen">

      <Router>
      <Header></Header>

      <div className="p-3">
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <About></About>
          </Route>
          <Route path="/visitors/:id">
            <Visitor></Visitor>
          </Route>
        </Switch>
      </div>



        <Footer></Footer>


      </Router>

      {/* <CounterExample></CounterExample> */}
    </div>


  );
}

export default App;
