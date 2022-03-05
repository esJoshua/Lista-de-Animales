export default class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = () => nombre;
    this._direccion = () => direccion;
    this._telefono = () => telefono;
  }
  datosPropietario() {
    return `<ul>
    <li>El nombre del dueño es: ${this._nombre()}. El domicilio es: ${this._direccion()}, y el número telefónico de contacto: 
    ${this._telefono()}
    </li>
    `;
  }
}
