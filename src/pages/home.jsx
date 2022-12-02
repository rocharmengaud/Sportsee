import React, { useState } from 'react';
import { getUserData /*getMockedUserData*/ } from '../services/apidata';
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';
// mettre curly navbar
import { Loader } from '../components/loader';
import { Profile } from '../components/profile';
import { HealthStats } from '../components/healthStats';
import { BarStats } from '../components/barStats';
import { LineStats } from '../components/lineStats';
import Sidebar from '../components/sidebar';

import '../styles/home.css';
import { RadarStats } from '../components/radarStats';
import { RadialStats } from '../components/radialStats';

/**
 * Function that displays all the informations of the user and his associated ID in the home page
 *
 * @return {React.ReactElement} A React component.
 */

export default function Home() {
  const [userData, setUserData] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  // le useEffect est une fonction callback qui va s'executer lorsque le(s) second(s) parametre(s) changent de valeur (ici [id])
  // ici le useEffect sert a aller chercher les données de mon apidata
  // ici l'id est une constante a récuperer avec le useParams au dessus
  React.useEffect(() => {
    getUserData(id)
      .then((data) => setUserData(data))
      .catch(setError);
    // const mockedUserData = getMockedUserData(id);
    // setUserData(mockedUserData);
  }, [id]);

  console.log(userData);

  if (error) {
    return <div>pas de user data</div>;
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* on demande si les data sont defined avec un ternaire*/}
      {userData ? (
        <div className="home-container">
          <div className="home-items">
            <Profile firstName={userData.getUserInfos().firstName} />
            <div className="allstats-container">
              <div className="charts-container">
                <div className="charts">
                  <BarStats />
                  <div className="triplestats-container">
                    <LineStats />
                    <RadarStats />
                    <RadialStats score={userData.getTodayScore()} />
                  </div>
                </div>
                <div className="healthstats-container">
                  <HealthStats keyData={userData.getKeyData()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
