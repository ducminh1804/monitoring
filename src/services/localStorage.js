export const getAuthFromStorage = () => {
  const stored = localStorage.getItem("isAuthenticated");
  return stored ? JSON.parse(stored) : false;
};

export const setAuthToStorage = (isAuthenticated) => {
  localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
};

export const removeAuthFromStorage = () => {
  localStorage.removeItem("isAuthenticated");
};

export const setSortDeviceToStorage = (sort) => {
  localStorage.setItem("sortDevices", JSON.stringify(sort));
};

export const getSortDeviceFromStorage = () => {
  const data = localStorage.getItem("sortDevices");
  return data ? JSON.parse(data) : [];
};
