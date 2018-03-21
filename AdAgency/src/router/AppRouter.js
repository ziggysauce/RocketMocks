import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';
import Dashboard from '../components/Dashboard';
import Works from '../components/pages/Works';
import Services from '../components/pages/Services';
import Agency from '../components/pages/Agency';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/works" component={Works} />
        <Route path="/services" component={Services} />
        <Route path="/agency" component={Agency} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter;