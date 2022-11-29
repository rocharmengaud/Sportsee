import React from 'react';
import PropTypes from 'prop-types';

import '../styles/profile.css';

/**
 * Function that displays the name of the user at the top of the page
 *
 * @prop {object} firstName name of the user
 *
 * @return  {React.ReactElement} A React component.
 */

export const Profile = (props) => {
  console.log(props);
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <span>Bonjour</span>
          <div className="profile-name">{props.firstName}</div>
        </div>
        <div className="profile-cheer">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
      </div>
    </>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
};
