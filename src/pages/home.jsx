import React, { useState } from 'react';
import { getUserData, getUserActivity, getUserSessions, getUserPerformance } from '../services/apidata';
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

export default function Home() {
  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  const { id } = useParams();

  // le useEffect est une fonction callback qui va s'executer lorsque le(s) second(s) parametre(s) changent de valeur (ici [id])
  // ici le useEffect sert a aller chercher les données de mon apidata
  // ici l'id est une constante a récuperer avec le useParams au dessus
  React.useEffect(() => {
    getUserData(id).then((data) => setUserData(data));
    getUserActivity(id).then((data) => setUserActivity(data));
    getUserSessions(id).then((data) => setUserSessions(data));
    getUserPerformance(id).then((data) => setUserPerformance(data));
  }, [id]);

  console.log(userData);
  console.log(userSessions);
  console.log(userActivity);
  console.log(userPerformance);

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* on demande si les data sont defined avec un ternaire*/}
      {userData && userActivity && userSessions && userPerformance ? (
        <div className="home-container">
          <div className="home-items">
            <Profile firstName={userData.getUserInfos().firstName} />
            <div className="allstats-container">
              <div className="barstats">
                <BarStats sessions={userActivity.getSessions()} />
                <div className="healthstats-container">
                  <HealthStats keyData={userData.getKeyData()} />
                </div>
              </div>
              <div className="triplestats-container">
                {<LineStats sessions={userSessions.getSessions()} />}
                <RadarStats data={userPerformance.getData()} />
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
