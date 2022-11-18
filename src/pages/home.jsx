import React from 'react';
// import { getUserData } from '../services/apidata';
// import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';

export default function Home() {
  // const userData = getUserData(12);
  // console.log(userData);

  // const { id } = useParams();

  // ici l'id est une constante a récuperer avec le useParams au dessus
  // React.useEffect(() => {
  //   getUserData(12);
  // }, [id]);

  // const currentUser = userData.find((el) => {
  //   return el.id === id;
  // });

  // console.log(currentUser);

  return (
    <>
      <div className="home-content">
        <Navbar />
      </div>
    </>
  );
}
