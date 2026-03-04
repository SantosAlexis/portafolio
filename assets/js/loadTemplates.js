fetch("./data/templates.json")
  .then((response) => response.json())
  .then((data) => {
    const grid = document.getElementById("grid");

    data.forEach((template) => {
      grid.innerHTML += `
        <div class="card">
          <img src="${template.imagen}" alt="${template.nombre}">
          <h3>${template.nombre}</h3>
          <p>${template.descripcion}</p>
          <p class="precio">${template.precio}</p>
          <a href="${template.demo}" target="_blank" class="btn-demo">
            Ver Demo
          </a>
        </div>
      `;
    });
  });
