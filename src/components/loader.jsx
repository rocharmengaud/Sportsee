import React from 'react';

/**
 * Function that displays "fetching data" if the ternary
 * {userData && userActivity && userSessions && userPerformance ?
 * from the homepage.jsx (line 52) fails
 *
 * @return {React.ReactElement} A React component.
 */

export const Loader = () => {
  return <div>Fetching data</div>;
};
