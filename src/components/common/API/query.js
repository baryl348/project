export let passwordReq = "";
export let emailReq = "";

export let login = (email, password) => {
  return `query{login(email:"${email}", password: "${password}"){userId, token, firstName, secondName}}`;
};

export let register = (email, password, firstName, secondName) => {
  passwordReq = password;
  emailReq = email;
  return `mutation{createUser(userInput: {email: "${email}", password: "${password}", firstName: "${firstName}", secondName: "${secondName}"}){email, firstName, secondName}}`;
};

// для профиля
export let profileUpload = (email, password, firstName, secondName, id) => {
  return `mutation{updateUser( id:"${id}",userInput: {email: "${email}", password: "${password}", firstName: "${firstName}", secondName: "${secondName}"}){email, firstName, secondName}}`;
};

// для процесса
export let processEvents = () => {
  return `query{events{title,completed,executionTime,activeTime,employeesInProcess,scriptsInProcess,start,end,loading}}`;
};
