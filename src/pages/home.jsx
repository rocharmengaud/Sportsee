import React, { useState } from 'react';
import { getUserData, getUserActivity } from '../services/apidata';
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';
// mettre curly navbar
import { Loader } from '../components/loader';
import { Profile } from '../components/profile';
import { HealthStats } from '../components/healthStats';
import { BarStats } from '../components/barStats';
import Sidebar from '../components/sidebar';

import '../styles/home.css';

export default function Home() {
  const [userData, setUserData] = useState();

  const [userActivity, setUserActivity] = useState();

  const { id } = useParams();

  // le useEffect est une fonction callback qui va s'executer lorsque le(s) second(s) parametre(s) changent de valeur (ici [id])
  // ici le useEffect sert a aller chercher les données de mon apidata
  // ici l'id est une constante a récuperer avec le useParams au dessus
  React.useEffect(() => {
    getUserData(id).then((data) => setUserData(data));
    getUserActivity(id).then((data) => setUserActivity(data));
  }, [id]);

  console.log(userData);
  console.log(userActivity);

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* on demande si userData est defined avec un ternaire*/}
      {userData && userActivity ? (
        <div className="home-container">
          <div className="home-items">
            <Profile firstName={userData.userInfos.firstName} />
            <div className="allstats-container">
              <BarStats sessions={userActivity.sessions} />
            </div>
          </div>
          <div className="healthstats-container">
            <HealthStats keyData={userData.keyData} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
