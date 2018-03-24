import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, ScrollToTop } from 'react-router-dom';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Dashboard from '../components/Dashboard';
import Works from '../components/pages/Works';
import Services from '../components/pages/Services';
import Agency from '../components/pages/agency/Agency';
import Blog from '../components/pages/blog/Blog';
import BlogType from '../components/pages/blog/BlogType';
import Contact from '../components/pages/Contact';
import Careers from '../components/pages/Careers';
import NotFound from '../components/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/works" component={Works} />
            <Route path="/services" component={Services} />
            <Route path="/agency" component={Agency} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogType} />
            <Route path="/contact" component={Contact} />
            <Route path="/careers" component={Careers} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default AppRouter;