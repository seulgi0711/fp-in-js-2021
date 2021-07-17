const names = [
  // ...
];

const replaceSpace = (str) => {
  return str.replace(/(_|-)/, ' ');
}

const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const changePartStartCase = (str) => {
  return str.split(' ').map(startCase).join(' ')
}

names
  .map((name) => replaceSpace(name))
  .map((name) => changePartStartCase(name))