import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Home, About, Events, Products, Contact } from './pages'

window.React = React

//Last <Route/> has no path property
render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/events" component={Events}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Page404}/>
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)

//export default HashRouter
