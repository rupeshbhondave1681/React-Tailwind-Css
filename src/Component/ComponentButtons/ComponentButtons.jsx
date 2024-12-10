import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentButtons.css';

export default function ComponentButtons() {
  return (
    <div>
      <button>
        <Link to="/filters">Go to Filters</Link>
      </button>
      <button>
        <Link to="/interactivity">Go to Interactivity</Link>
      </button>
      <button>
        <Link to="/mediaQueryBreakPoints">Meadia Query & Break Point</Link>
      </button>
      <button>
        <Link to="/column">Column</Link>
      </button>
      <button>
        <Link to="/flex">Flex</Link>
      </button>
    </div>
  );
}
