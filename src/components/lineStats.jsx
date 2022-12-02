import React, { useState } from 'react';
import { getUserSessions } from '../services/apidata';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';

import { Loader } from './loader';
import '../styles/lineStats.css';

/**
 * If the tooltip is active and there is data to display, then display the data.
 * @prop {Boolean} active if the component is active or not (mouse over)
 * @prop {ArrayOfObject} payload Properties of each chart Bar
 */
const CustomTooltip = ({ payload, active }) => {
  // console.log(active, payload);
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Function that displays the the line styled chart from ReChart
 *
 * @prop {Object} props - object containing sessions data
 *
 * @return  {React.ReactElement} A React component.
 */

export const LineStats = () => {
  const { id } = useParams();
  const [userSessions, setUserSessions] = useState();
  const [error, setError] = useState();

  React.useEffect(() => {
    getUserSessions(id)
      .then((data) => setUserSessions(data))
      .catch(setError);
  }, [id]);

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const dataSessions = () =>
    userSessions.sessions.map((session, index) => ({
      day: days[index],
      sessionLength: session.sessionLength,
    }));

  if (error) {
    return <div>pas de user sessions</div>;
  }

  return userSessions ? (
    <div className="linestats">
      <span className="linestats-title">Durée moyenne des sessions</span>
      <ResponsiveContainer width={258} height="100%" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <LineChart data={dataSessions()} style={{ background: 'red', borderRadius: '10px' }} margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ stroke: 'red', strokeWidth: 2, r: 3 }}
            unit={'min'}
            stroke={'#FFF'}
            strokeWidth={2}
          />
          <YAxis hide padding={{ top: 80, bottom: 40 }} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ right: 20, left: 20 }} stroke={'#fff'} interval={'preserveStartEnd'} />
          <Tooltip
            wrapperStyle={{
              background: '#FFF',
              width: '60px',
              height: '30px',
              outline: 'none',
            }}
            cursor={{
              strokeOpacity: 0,
            }}
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <Loader />
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
};

LineStats.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};
