/* ------------ */
// 1. REQUISITOS
/* ------------ */

// 1.1 Petición de funcionalidad (reunión 1-2h con jefe de negocio, de servicios, product owner o project manager)
// Tip: Apuntar todo en la reunión

// -> Necesitamos una web para almacenar las tareas de los usuarios. API, tematización...

// 1.2 Traducir a funcionalidades de HTML, JS, partes de la aplicación
// - Input con el nombre de tarea
// - Botón para agregar tarea
// - Listado de tareas
// - Botón eliminar tareas
// - Botón eliminar tareas individuales

// 1.3 Definir acciones de usuario
// - Agregar tarea
// - Eliminar (tarea o tareas)

// 1.4 Definir resultado a mostrar (API + acciones usuario -> output)
// - Lista de tareas


/* --------------- */
// 2. PLANIFICACIÓN
/* --------------- */

// 2.1 Hitos de la aplicación
// - Crear un HTML estático
// - Montar la base del javascript -> estructura & pseudocódigo
// - Rellenar las diferentes partes del JS
// - Lincar & degugar JS+HTML
// - Mejorar maquetación

// 2.2 Tareas concretas -> ganar focus
// C1 [HTML] Implementar bootstrap + crear input + button + dejar espacio para el listado <ul> [1h]
// C2 [JS] Definir las variables que necesitará el programa [0.5h]
// C3 [JS] Escribir todas las funciones vacias de javascript [1h]
// -> C4 [JS] Rellenar lógica de funciones: una a una!! -> probar -> siguiente [3h]
// - C5 [HTML] Mejorar interficie [2h]

// ** 1. VARIABLES
var input = document.getElementById("userInput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

// ** 2. FUNCIONES

// Agregar tarea
function handleClick() {
   if(input.value.length > 0) {
    createListElement();
   }
}

// Añadir tarea en el HTML
function createListElement() {
    var li = document.createElement('li'); // create li element.
    li.innerHTML = input.value; // assigning text input to li element
    li.classList.add("list-group-item"); // Add styles
    ul.appendChild(li); // append li to ul.
} 

// Limpiar tareas
function cleanList() {
}

// Eliminar tarea
function removeItemFromList() {
}

// Modificar tarea?
function modifyList() {

}

// ** 3. EVENTOS

// click botón
button.addEventListener("click", handleClick)
// apretar tecla?