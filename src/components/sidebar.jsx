import React from 'react';

import { ZenIcon } from '../assets/zenIcon';
import { SwimIcon } from '../assets/swimIcon';
import { BikeIcon } from '../assets/bikeIcon';
import { WeightIcon } from '../assets/weightIcon';

import '../styles/sidebar.css';

/**
 * Function that displays the sidebar
 *
 * @return {React.ReactElement} A React component.
 */

export default function Sidebar() {
  return (
    <nav className="sidebar-container">
      <div className="sidebar-icons">
        <div className="zen-icon">
          <ZenIcon />
        </div>
        <div className="two">
          <SwimIcon />
        </div>
        <div className="three">
          <BikeIcon />
        </div>
        <div className="four">
          <WeightIcon />
        </div>
      </div>
      <div className="sidebar-copyright">Copyright, SportSee 2020</div>
    </nav>
  );
}
