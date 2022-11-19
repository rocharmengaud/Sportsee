import React from 'react';

import '../styles/profile.css';

export const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-name">{'Bonjour ' + props.firstName}</div>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
};
