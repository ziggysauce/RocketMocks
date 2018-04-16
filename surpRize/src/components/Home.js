import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Intro from './layout/Intro';
import GeneralInfo from './layout/GeneralInfo';
import PastWork from './layout/PastWork';
import Conclusion from './layout/Conclusion';

// React smooth scroll
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Dashboard extends React.Component {
  scrollTo(destination) {
    let pos = document.querySelector(destination).getBoundingClientRect().y;
    scroll.scrollMore(pos);
  }

  render() {
    return (
      <div>
        <Header scrollTo={this.scrollTo}/>
        <div className="home__wrapper" id="about">
          <Intro scrollTo={this.scrollTo}/>
          <GeneralInfo scrollTo={this.scrollTo}/>
          <PastWork scrollTo={this.scrollTo}/>
          <Conclusion scrollTo={this.scrollTo}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
  

export default Dashboard;