import React from "react";

export default React.createContext({
  token: null,
  userId: null,
  firstName: null,
  secondName: null,
  login: (token, userId, firstName, secondName) => {},
  logout: () => {},
  title: null,
  completed: null,
  executionTime: null,
  activeTime: null,
  employeesInProcess: null,
  scriptsInProcess: null,
  start: null,
  end: null,
  loading: null,
  process: (
    title,
    completed,
    executionTime,
    activeTime,
    employeesInProcess,
    scriptsInProcess,
    start,
    end,
    loading
  ) => {},
});
