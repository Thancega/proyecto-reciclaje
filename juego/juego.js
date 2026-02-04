const residuos = [
  { nombre: "Cáscara de fruta", tipo: "organico", img: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png" },
  { nombre: "Botella de plástico", tipo: "reciclable", img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
  { nombre: "Pila usada", tipo: "no", img: "https://cdn-icons-png.flaticon.com/512/2942/2942909.png" },
  { nombre: "Papel", tipo: "reciclable", img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png" },
  { nombre: "Restos de comida", tipo: "organico", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" }
];

let i = 0;
let puntos = 0;

const img = document.getElementById("img");
const nombre = document.getElementById("nombre");
const contador = document.getElementById("contador");

function cargar() {
  if (i < residuos.length) {
    img.src = residuos[i].img;
    nombre.textContent = residuos[i].nombre;
    contador.textContent = `Pregunta ${i + 1} de ${residuos.length}`;
  } else {
    resultado();
  }
}

function responder(tipo) {
  if (tipo === residuos[i].tipo) puntos++;
  i++;
  setTimeout(cargar, 400);
}

function resultado() {
  let aprobado = puntos / residuos.length >= 0.7;

  document.body.innerHTML = aprobado
    ? `<h2>🎉 ¡Felicidades! Aprobaste ♻️</h2>`
    : `<h2>❌ No aprobaste</h2>
       <a href="../index.html">Volver a las lecciones</a>`;
}

cargar();
