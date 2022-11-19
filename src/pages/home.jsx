import React, { useState } from 'react';
import { getUserData } from '../services/apidata';
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';
// mettre curly navbar
import { Loader } from '../components/loader';
import { Profile } from '../components/profile';

export default function Home() {
  const [userData, setUserData] = useState();

  const { id } = useParams();

  // le useEffect va
  // ici l'id est une constante a récuperer avec le useParams au dessus
  React.useEffect(() => {
    getUserData(id).then((data) => setUserData(data));
  }, [id]);
  console.log(userData);

  return (
    <>
      <Navbar />
      {/* on demande si userData est defined */}
      {userData ? (
        <div className="home-content">
          <Profile firstName={userData.userInfos.firstName} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
