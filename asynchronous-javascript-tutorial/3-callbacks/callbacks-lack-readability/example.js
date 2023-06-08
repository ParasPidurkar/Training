fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message);
    const firstBreedInTheList = breeds[0];

    return fetch(`https://dog.ceo/api/breed/${firstBreedInTheList}/images/random`);
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log('Error:', error));
