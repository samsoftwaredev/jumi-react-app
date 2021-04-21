const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const removeLocalStorage = (key) => localStorage.removeItem(key);

const getLocalStorage = (key) => localStorage.getItem(key);

export { setLocalStorage, removeLocalStorage, getLocalStorage };
