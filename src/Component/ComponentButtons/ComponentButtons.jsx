import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentButtons.css';

export default function ComponentButtons() {
  return (
    <div>
      <h1>Navigation Buttons</h1>
      <button>
        <Link to="/filters">Go to Filters</Link>
      </button>
      <button>
        <Link to="/interactivity">Go to Interactivity</Link>
      </button>
    </div>
  );
}
