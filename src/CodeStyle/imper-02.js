const names = [
  // ...
];

for (let i = 0; i < names.length; i += 1) {
  const name = names[i];
  const spaceName = name.replace(/(_|-)/, " ");

  names[i] = spaceName;
}