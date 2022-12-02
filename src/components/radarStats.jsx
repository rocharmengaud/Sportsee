import React, { useState } from 'react';
import { getUserPerformance } from '../services/apidata';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { Loader } from './loader';

/**
 * Function that displays the the line styled chart from ReChart
 *
 * @prop {Array} props - array containing 6 objects
 *
 * @return  {React.ReactElement} A React component.
 */

export const RadarStats = () => {
  const { id } = useParams();
  const [userPerformance, setUserPerformance] = useState();
  const [error, setError] = useState();

  React.useEffect(() => {
    getUserPerformance(id)
      .then((data) => setUserPerformance(data))
      .catch(setError);
  }, [id]);

  const label = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'];
  console.log(userPerformance);
  const mapData = () =>
    userPerformance.data.map((data, index) => ({
      label: label[index],
      value: data.value,
    }));

  if (error) {
    return <div>pas de user performance</div>;
  }

  return userPerformance ? (
    <div className="radarchart">
      <ResponsiveContainer width={258} height="100%" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <RadarChart style={{ background: 'black', borderRadius: '10px' }} outerRadius={75} data={mapData()}>
          <PolarGrid />
          <PolarAngleAxis dataKey="label" style={{ color: '#fff' }} stroke={'#fff'} tickLine={false} fontSize={13} />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <Loader />
  );
};

RadarStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ),
};
