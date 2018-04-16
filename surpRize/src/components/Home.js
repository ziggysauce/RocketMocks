import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './layout/Intro';
import GeneralInfo from './layout/GeneralInfo';
import PastWork from './layout/PastWork';
import Conclusion from './layout/Conclusion';

const Dashboard = () => (
  <div className="home__wrapper">
    <Intro />
    <GeneralInfo />
    <PastWork />
    <Conclusion />
  </div>
);

export default Dashboard;