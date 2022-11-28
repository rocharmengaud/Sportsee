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
    return this.score ?? this.todayScore;
  }
  getKeyData() {
    return this.keyData;
  }
}

export const getUserData = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}`);
  const { data } = await response.json();
  // ici il faut retourner une classe
  return new UserData(data.userInfos, data.score, data.todayScore, data.keyData);
  // return data;
};

class UserActivity {
  constructor(sessions) {
    this.sessions = sessions;
  }
  getSessions() {
    return this.sessions;
  }
}

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

export const getUserPerformance = async (id) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/user/${id}/performance`);
  const { data } = await response.json();
  return new UserPerformance(data.userId, data.kind, data.data);
  // return data;
};
