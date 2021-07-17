const names = [
  // ...
];

const replaceSpace = (str) => {
  return str.replace(/(_|-)/, ' ');
}

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

names
  .map((name) => replaceSpace(name))