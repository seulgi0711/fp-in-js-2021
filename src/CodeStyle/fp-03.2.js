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
  return str.split(' ') // ['leah', 'kelly']
    .map(startCase) // ['Leah', 'Kelly']
    .join(' ') // 'Leah Kelly'
}

names
  .map((name) => replaceSpace(name))