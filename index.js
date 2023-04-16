// Code your solution here
const findMatching = (names, str) => {
  return names.filter((name) => name.toLowerCase() === str.toLowerCase());
};

const fuzzyMatch = (names, str) => {
  return names.filter(function (name) {
    if (name[0] === str[0]) {
      return name;
    }
  });
};

const matchName = (names, str) => {
  return names.filter((name) => name["name"] === str);
};
