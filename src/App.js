import React from "react";
import Header from "./components/header";
import {BrowserRouter,HashRouter, Switch, Route } from "react-router-dom";
import Home from './views/home';
import People from './views/people';
import Contact from './views/contact';
import PersonDetails from './views/personDetails'

function App() {
  return (
    <HashRouter>
    <Header />

      <Route exact path ="/" component={Home} />
      <Route path ="/people" component={People} />
      <Route path ="/contact" component={Contact} />
      <Route path ="/person/:id" component={PersonDetails} />
    
    
    </HashRouter>
  );
}

export default App;
