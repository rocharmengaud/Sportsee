import React from 'react';

import { ChickenIcon } from '../assets/chickenIcon';
import { FireIcon } from '../assets/FireIcon';
import { AppleIcon } from '../assets/appleIcon';
import { BurgerIcon } from '../assets/burgerIcon';

import { HealthStat } from '../components/healthStat';
export const HealthStats = (props) => {
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
    return index === 0 ? (
      <HealthStat value={healthStat.value + ' kCal'} label={healthStat.label} icon={healthStat.icon} key={index} />
    ) : (
      <HealthStat value={healthStat.value + ' g'} label={healthStat.label} icon={healthStat.icon} key={index} />
    );
  });
};
