export const saveData = (strVar: string, data: object | string) => {
  return window.localStorage.setItem(strVar, JSON.stringify(data));
};

export const getData = (strVar: string) => {
  return JSON.parse(window.localStorage.getItem(strVar) as string);
};

export const removeData = (strVar: string) => {
  return window.localStorage.removeItem(strVar);
};
