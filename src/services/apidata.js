import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/mockedData';
class UserData {
  constructor(userInfos, score, todayScore, keyData) {
    this.userInfos = userInfos;
    this.score = score;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
  getUserInfos() {
    return this.userInfos;
  }
  getTodayScore() {
    // Opérateur de coalescence des nuls :
    // Si this.score est defined, ça le return, sinon ça return this.todayScore
    // utilisé pour le radialStats.jsx
    // ne pas confondre avec ternaire
    return this.score ?? this.todayScore;
  }
  getKeyData() {
    return this.keyData;
  }
}

/**
 * Takes one id as an argument, and returns a new instance of UserData class
 *
 * @param {Number} id The user id
 *
 * @return {Class} Returns user datas
 */

export const getUserData = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}`);
  const { data } = await response.json();
  // ici il faut retourner une classe
  return new UserData(data.userInfos, data.score, data.todayScore, data.keyData);
  // return data;
};

export const getMockedUserData = (id) => {
  const data = USER_MAIN_DATA.find((userData, index) => {
    return userData.id === parseInt(id);
  });
  return new UserData(data.userInfos, data.score, data.todayScore, data.keyData);
};

class UserActivity {
  constructor(sessions) {
    this.sessions = sessions;
  }
  getSessions() {
    return this.sessions;
  }
}

/**
 * Takes one id as an argument, and returns a new instance of UserActivity class
 *
 * @param {Number} id The user id
 *
 * @return {Class} Returns user activity
 */

export const getUserActivity = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/activity`);
  const { data } = await response.json();
  return new UserActivity(data.sessions);
  // return data;
};

class UserSessions {
  constructor(sessions) {
    this.sessions = sessions;
  }
  getSessions() {
    return this.sessions;
  }
}

/**
 * Takes one id as an argument, and returns a new instance of UserSessions class
 *
 * @param {Number} id The user id
 *
 * @return {Class} Returns user sessions
 */

export const getUserSessions = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/average-sessions`);
  const { data } = await response.json();
  return new UserSessions(data.sessions);
  // return data;
};

class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
  getUserId() {
    return this.userId;
  }
  getKind() {
    return this.kind;
  }
  getData() {
    return this.data;
  }
}

/**
 * Takes one id as an argument, and returns a new instance of UserPerformance class
 *
 * @param {Number} id The user id
 *
 * @return {Class} Returns user performance
 */

export const getUserPerformance = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/performance`);
  const { data } = await response.json();
  return new UserPerformance(data.userId, data.kind, data.data);
  // return data;
};
