function getPlanetName(id) {
  return ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id - 1];
}



console.log(getPlanetName(2), '->', 'Venus');
console.log(getPlanetName(5), '->', 'Jupiter');
console.log(getPlanetName(3), '->', 'Earth');