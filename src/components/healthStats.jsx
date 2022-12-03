import React from 'react';
import PropTypes from 'prop-types';

import { ChickenIcon } from '../assets/chickenIcon';
import { FireIcon } from '../assets/FireIcon';
import { AppleIcon } from '../assets/appleIcon';
import { BurgerIcon } from '../assets/burgerIcon';

import { HealthStat } from '../components/healthStat';

/**
 * Function that displays 1 icon and two statistics
 *
 * @prop {object} props - object with 4 keys, each one with a number value
 *
 * @return  {React.ReactElement} A react element with a loop of 4 React elements.
 */

export const HealthStats = (props) => {
  const healthStats = [
    {
      value: props.keyData.calorieCount,
      label: 'Calories',
      icon: <FireIcon />,
      backgroundColor: '#FF00001A',
    },
    {
      value: props.keyData.proteinCount,
      label: 'Proteines',
      icon: <ChickenIcon />,
      backgroundColor: '#4AB8FF1A',
    },
    {
      value: props.keyData.carbohydrateCount,
      label: 'Glucides',
      icon: <AppleIcon />,
      backgroundColor: '#F9CE231A',
    },
    {
      value: props.keyData.lipidCount,
      label: 'Lipides',
      icon: <BurgerIcon />,
      backgroundColor: '#FD51811A',
    },
  ];
  return healthStats.map((healthStat, index) => {
    return (
      <HealthStat
        // les parantheses ici fonctionnent comme la priorité en mathématiques
        value={healthStat.value + (healthStat.label === 'Calories' ? 'kCal' : 'g')}
        label={healthStat.label}
        icon={healthStat.icon}
        key={index}
        backgroundColor={healthStat.backgroundColor}
      />
    );
  });
};

HealthStats.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
  }),
};
