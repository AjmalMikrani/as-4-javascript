fetch('https://raw.githubusercontent.com/AjmalMikrani/json-data/refs/heads/main/data.json')
  .then(response => response.json())
  .then(data => {
    const bikeCatalog = document.getElementById('bikeCatalog');
    data.forEach(bike => {
      const bikeDiv = document.createElement('div');
      bikeDiv.classList.add('bike-item');
      
      bikeDiv.innerHTML = `
        <h2>${bike.name}</h2>
        <p>Brand: ${bike.brand}</p>
        <p>Price: ${bike.price}</p>
        <img src="${bike.image}" alt="${bike.name}" width="200">
      `;
      
      bikeCatalog.appendChild(bikeDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
