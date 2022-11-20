import React, { useState } from 'react';
import { getUserData, getUserActivity } from '../services/apidata';
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';
// mettre curly navbar
import { Loader } from '../components/loader';
import { Profile } from '../components/profile';
import Sidebar from '../components/sidebar';

import '../styles/home.css';
import { HealthStats } from '../components/healthStats';

export default function Home() {
  const [userData, setUserData] = useState();

  const [userActivity, setUserActivity] = useState();

  const { id } = useParams();

  // le useEffect est un callback qui va s'executer lorsque le(s) second(s) parametre(s) changent de valeur (ici [id])
  // ici l'id est une constante a récuperer avec le useParams au dessus
  // ici le useEffect sert a aller chercher les données de mon apidata
  React.useEffect(() => {
    getUserData(id).then((data) => setUserData(data));
    getUserActivity(id).then((data) => setUserActivity(data));
  }, [id]);

  console.log(userData);
  console.log(userActivity);

  return (
    <>
      <Navbar />
      {/* on demande si userData est defined avec un ternaire*/}
      {userData ? (
        <div className="home-content">
          <Sidebar />
          <div className="home-container">
            <Profile firstName={userData.userInfos.firstName} />
          </div>
          <HealthStats keyData={userData.keyData} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
