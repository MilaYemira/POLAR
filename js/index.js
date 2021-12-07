let nombre = document.getElementById("nombre");
let forma = document.getElementById("forma");
let color= document.getElementById("color");
let agregar_btn = document.getElementById("agregar-btn");
let caja = document.getElementById("datos");
let nombres = [];

let datos = JSON.parse(localStorage.getItem("nombres"));

if (datos != null) {
    nombres = datos;
}
console.log(forma.value);
console.log(color.value)

agregar_btn.addEventListener("click", () => {
    let nom = nombre.value;
    nombres.push({
       nombres: nom,
    });
    localStorage.setItem("nombres", JSON.stringify(nombres));
    nombre.value = "";

    let form = forma.value;
    forma.push({
       formas: form,
    });
    localStorage.setItem("formas", JSON.stringify(forma));
    forma.value = "";

    let color = color.value;
    color.push({
       color: color,
    });
    localStorage.setItem("color", JSON.stringify(color));
    color.value = "";
    mostrar_lista();
});
 
const mostrar_lista = () => {
    caja.innerHTML = "";
    nombres.forEach((element) => {
        caja.insertAdjacentHTML(
            "beforeend",
            `
                    <li>${element.nombres}</li>
              `
        );
    });
    

};
mostrar_lista();
