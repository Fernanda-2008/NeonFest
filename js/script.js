function toggleMenu() {
    document.getElementById("menu").classList.toggle("activo");
}

function mostrarPromo() {
    alert("🎉 Promoción especial: 20% de descuento en boletos VIP.");
}

function seleccionarBoleto(tipo) {

    document.getElementById("boletoSeleccionado").innerHTML =
        "Has seleccionado el boleto: " + tipo;
}

function registrar() {

    let nombre =
        document.getElementById("nombre").value;

    let correo =
        document.getElementById("correo").value;

    if (nombre === "" || correo === "") {

        document.getElementById("respuesta").innerHTML =
            "Por favor completa todos los campos.";

        return;
    }

    document.getElementById("respuesta").innerHTML =
        "Gracias por registrarte, " + nombre + ".";
}
