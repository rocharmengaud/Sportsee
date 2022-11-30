import React from 'react';
import PropTypes from 'prop-types';

import { ChickenIcon } from '../assets/chickenIcon';
import { FireIcon } from '../assets/FireIcon';
import { AppleIcon } from '../assets/appleIcon';
import { BurgerIcon } from '../assets/burgerIcon';

import { HealthStat } from '../components/healthStat';
export const HealthStats = (props) => {
  console.log(props);
  const healthStats = [
    {
      value: props.keyData.calorieCount,
      label: 'Calories',
      icon: <FireIcon />,
    },
    {
      value: props.keyData.proteinCount,
      label: 'Proteines',
      icon: <ChickenIcon />,
    },
    {
      value: props.keyData.carbohydrateCount,
      label: 'Glucides',
      icon: <AppleIcon />,
    },
    {
      value: props.keyData.lipidCount,
      label: 'Lipides',
      icon: <BurgerIcon />,
    },
  ];
  return healthStats.map((healthStat, index) => {
    return healthStat.label === 'Calories' ? (
      <HealthStat value={healthStat.value + ' kCal'} label={healthStat.label} icon={healthStat.icon} key={index} />
    ) : (
      <HealthStat value={healthStat.value + ' g'} label={healthStat.label} icon={healthStat.icon} key={index} />
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
