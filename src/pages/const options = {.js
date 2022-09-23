const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd2ac3d15c6msh50d17591ef2b24fp1eb393jsn6fcc0d859c08',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
