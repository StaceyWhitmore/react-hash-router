import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Home, About, Events, Products, Contact } from './pages'

window.React = React

//Last <Route/> has no path property
/*Also, assume prior versions of page had a different paths for history, services and
locations so redirects have been added.
*/
render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>

        <Redirect from="/history" to="/about/history"/>
        <Redirect from="/" to="/about/services"/>
        <Redirect from="/" to="/about/locations"/>
        
        <Route path="/events" component={Events}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact}/>
        <Route component+{Page404}/>
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'))
