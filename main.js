const botonAgregar = document.getElementById("addTask");
const galeria = document.getElementById("gallery");
const nombreInput = document.getElementById("pokemonName");
const imagenInput = document.getElementById("pokemonImage");

botonAgregar.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const imagen = imagenInput.value.trim();

  if (!nombre || !imagen) return alert("Completa ambos campos.");

  const tarjetaHTML = `
    <div class="card">
      <button class="remove-btn">X</button>
      <img src="${imagen}" alt="${nombre}">
      <h3>${nombre}</h3>
    </div>
  `;

  galeria.insertAdjacentHTML("beforeend", tarjetaHTML);
  nombreInput.value = "";
  imagenInput.value = "";
});

// Delegación de eventos
galeria.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
  }
});

galeria.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "IMG") {
    const nuevaURL = prompt("Ingrese la nueva URL de la imagen:");
    if (nuevaURL) {
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = nuevaURL;
      nuevaImagen.alt = e.target.alt;

      nuevaImagen.animate([
      ], {
        duration: 300,
        easing: "ease-out"
      });

      e.target.replaceWith(nuevaImagen);
    }
  }
});


// Animación al pasar el mouse
galeria.addEventListener("mouseenter", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.animate([
      { transform: "rotate(0deg)" },
      { transform: "rotate(2deg)" },
      { transform: "rotate(-2deg)" },
      { transform: "rotate(0deg)" }
    ], {
      duration: 500,
      iterations: 1
    });
  }
}, true);
