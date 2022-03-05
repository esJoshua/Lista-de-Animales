import Mascota from "./modules/Mascota.js";

const form = document.getElementById("form");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const resultadoId = document.getElementById("resultado");

const resetForm = () => {
  propietario.value = "";
  telefono.value = "";
  direccion.value = "";
  nombreMascota.value = "";
  tipo.value = "";
  enfermedad.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.table({
    propietario: propietario.value,
    direccion: direccion.value,
    telefono: telefono.value,
    tipo: tipo.value,
    nombreMascota: nombreMascota.value,
    enfermedad: enfermedad.value,
  });

  let tipoAnimal = tipo.value;
  tipoAnimal = new Mascota(
    propietario.value,
    direccion.value,
    telefono.value,
    tipo.value,
    nombreMascota.value,
    enfermedad.value
  );

  resultadoId.innerHTML = `
  ${tipoAnimal.datosPropietario()} 
    <li>
    ${tipoAnimal.tipo}, mientras que el nombre de la mascota es: 
    ${tipoAnimal.nombre} y la enfermedad es:
    ${tipoAnimal.enfermedad}
    </li>
  </ul>`;

  resetForm();
});
