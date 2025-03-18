// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value;
    const lista = document.getElementById("listaAmigos");

    if (nombre === ""){
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = "";
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const randomIndice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[randomIndice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`
}