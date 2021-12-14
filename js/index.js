let nombre = document.getElementById("nombre");
let forma = document.getElementById("forma");
let color = document.getElementById("color");

let save_btn = document.getElementById("save-btn");

let contenedor = document.getElementById("figuras");

let figuras =[];

save_btn.addEventListener("click" , () => {
    figuras.push({
        nombre: nombre.value,
        forma: forma.value,
        color: color.value,
    });
    pintar_figuras();
});

const pintar_figuras = () => {
    contenedor.innerHTML = "";
    figuras.forEach((e) => {
        contenedor.insertAdjacentHTML(
            "beforeend",
            `
                    <div class="${e.forma}" style="background;${e.color}">
                      ${e.nombre}
                    </div>
              `
        );
    });
};
const mostrar_lista = () => {
    caja.innerHTML = "";
    nombre.forEach((element) => {
        caja.insertAdjacentHTML(
            "beforeend",
            `
                    <li>${element.nombre}</li>
              `
        );
    });
    

};