const names = [
  // ...
];

for (let i = 0; i < names.length; i += 1) {
  const name = names[i];
  const spaceName = name.replace(/(_|-)/, " ");
  // ['leah', 'kelly']
  const splitName = spaceName.split(" ");

  for (let j = 0; j < splitName.length; j += 1) {
    let partName = splitName[j];
    partName = 
      partName.charAt(0).toUpperCase() + 
      partName.slice(1);
    // ['Leah', 'Kelly']
    splitName[j] = partName;
  }

  names[i] = splitName.join(' ');
}