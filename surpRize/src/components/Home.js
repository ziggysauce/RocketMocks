import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './layout/Intro';
import GeneralInfo from './layout/GeneralInfo';

const Dashboard = () => (
  <div className="home__wrapper">
    <Intro />
    <GeneralInfo />
  </div>
);

export default Dashboard;