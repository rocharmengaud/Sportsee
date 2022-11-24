// class User {
//   constructor(userActivity, todayScore, keyData) {
//     this.lenomqu'onveut = userActivity;
//     this.todayScore = todayScore;
//     this.keyData = keyData;
//   }
// }

export const getUserData = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}`);
  const { data } = await response.json();
  // ici il faut retourner une classe
  // return new User(data.userActivity, data.todayScore, data.keyData);
  return data;
};

export const getUserActivity = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/activity`);
  const { data } = await response.json();
  return data;
};

export const getUserSessions = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/average-sessions`);
  const { data } = await response.json();
  return data;
};

export const getUserPerformance = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/performance`);
  const { data } = await response.json();
  return data;
};
