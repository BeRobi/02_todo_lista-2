import MegjelenitSor from "./MegjelenitSor.js";
// táblázat osztály
class Megjelenit {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    szuloElem.append('<table class="table table-bordered table-striped  ">');
    this.tablaElem = szuloElem.children("table");

    this.tablazatbaIr();
  }
  tablazatbaIr() {
    this.#list.forEach((elem, index) => {
      new MegjelenitSor(elem, this.tablaElem, index); //lista akutális eleme
    });

    /* for (let index = 0; index < this.#list.length; index++) {
            const elem = this.#list[index];

            new MegjelenitSor(elem, this.tablaElem);
        } */
  }
}
export default Megjelenit;
