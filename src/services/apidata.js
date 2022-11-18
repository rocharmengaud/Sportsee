export const getUserData = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}`);
  const { data } = await response.json();
  return data;
};
