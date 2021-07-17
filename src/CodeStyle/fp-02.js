const names = [
  // ...
];

const replaceSpace = (str) => {
  return str.replace(/(_|-)/, ' ');
}

names
  .map((name) => replaceSpace(name))