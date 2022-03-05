import Animal from "./Animal.js";

export default class Mascota extends Animal {
  constructor(nombreP, direccion, telefono, tipo, nombre, enfermedad) {
    super(nombreP, direccion, telefono, tipo);
    this._nombre = () => nombre;
    this._enfermedad = () => enfermedad;
  }
  get nombre() {
    return this._nombre();
  }
  get enfermedad() {
    return this._enfermedad();
  }
  set nombre(nombre) {
    this._nombre = () => nombre;
  }
  set enfermedad(enfermedad) {
    this.enfermedad = () => enfermedad;
  }
}
