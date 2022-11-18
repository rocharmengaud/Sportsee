export const getUserData = (id) => {
  let userData = {};

  fetch('http://localhost:3001/user/12')
    .then((response) => response.json())
    .then((data) => {
      userData = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return userData;
};
