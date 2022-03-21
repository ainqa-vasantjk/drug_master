export const removeDuplicates = (originalArray, prop) => {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i]?.[prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

export const defaultHeader = (access_token) => {
  const myHeaders = new Headers();

  myHeaders.append("Authorization", access_token);

  return myHeaders;
};

export const networkCall = async () => {
  return new Promise((resolve, reject) => {});
};
