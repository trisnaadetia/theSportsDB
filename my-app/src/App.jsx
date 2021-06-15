import React from 'react'
import Home from './pages/Home'
import Team from './pages/Team'
import Favourite from './pages/Favourite'
import NotFound from './pages/NotMatch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/team/:id">
            <Team />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
