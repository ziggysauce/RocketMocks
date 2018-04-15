import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter;