import React from 'react';
import { FireIcon } from '../assets/FireIcon';
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
    },
    {
      value: props.keyData.carbohydrateCount,
      label: 'Glucides',
    },
    {
      value: props.keyData.lipidCount,
      label: 'Lipides',
    },
  ];
  return healthStats.map((healthStat, index) => {
    return <HealthStat value={healthStat.value} label={healthStat.label} icon={healthStat.icon} key={index} />;
  });
};
