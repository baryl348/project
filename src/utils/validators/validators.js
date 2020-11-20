export const requiredField = (value) => {
  if (!!value) return undefined;
  return "Field is required";
};

export const maxlengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`;
  return undefined;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength)
    return `Min length is ${minLength} symbols`;
  return undefined;
};

export const emailCreator = (email) => {
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return "Invalid email address";
  return undefined;
};

export const alphaNumericCreator = (alphaNumeric) => (value) => {
  if (value && /[^a-zA-Z0-9 ]/i.test(value))
    return "Only alphanumeric characters";
  return undefined;
};

export const match = (matchName) => (value, allValues, props) =>
  value !== allValues[matchName] ? `${matchName} должны совпадать` : undefined;
