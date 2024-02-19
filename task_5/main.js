const pet = {
    species: 'Cat',
    name: 'Anfisa',
    age: 5,
    characteristics: ['playful', 'affectionate', 'curious'],
    health: 'good'
  };
  
  for (let key in pet) {
    console.log(`${key}: ${pet[key]}`);
  }
  
  if (pet.age < 5) {
    console.log('Anfisa is still young!');
  } else {
    console.log('Anfisa is a mature cat.');
  }