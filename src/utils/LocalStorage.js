export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const setAccessToken = (token) => {
  localStorage.setItem('access_token', token);
};

export const getName = () => {
  return localStorage.getItem('name');
};

export const setName = (nameUser) => {
  if (!!getName()) {
    localStorage.removeItem('name');
  }
  localStorage.setItem('name', nameUser);
};

export const removeDataStorage = () => {
  localStorage.clear();
}