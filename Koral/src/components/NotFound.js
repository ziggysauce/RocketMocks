import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="error-page">
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;