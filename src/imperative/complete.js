const names = [
  'leah kelly',
  'christian_Nolan',
  'Alexander james',
  'Tim-Mackenzie',
  'dan_Hunter',
  'Ryan Bower',
  'Frank_chapman',
  'Dorothy-Sanderson',
  'Fiona_Glover',
  'Robert Edmunds',
];

const result = [];

for (let i = 0; i < names.length; i += 1) {
  const name = names[i];
  const spaceName = name.replace(/(_|-)/, " ");
  const splitName = spaceName.split(" ");

  // splitName = ['leah', 'kelly']
  for (let j = 0; j < splitName.length; j += 1) {
    let partName = splitName[j];
    partName = 
      partName.charAt(0).toUpperCase() + 
      partName.slice(1);
    splitName[j] = partName;
  }

  result.push(splitName.join(' '));
}

result.sort();