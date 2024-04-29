//let fecha = document.getElementById("date");
let casa = document.getElementById("casa");
let spanVenta = document.getElementById("venta");
let spanCompra = document.getElementById("compra");
let fecha = document.getElementById("fecha")
let url;

// Agregar un listener para el evento click al botón
document.querySelector('button').addEventListener('click', cotizar);

function cotizar() {
    //let fechaValor = fecha.value; // Obtener el valor de la fecha
    let tipoDolar = casa.value; // Obtener el tipo de dólar

    const url = "https://dolarapi.com/v1/dolares";
    let info = JSON.parse(sessionStorage.getItem("data"));

    if (info) {
        console.log("No llamo a la api");
        fecha.innerText = new Date (info[0].fechaActualizacion);
        switch (tipoDolar) {
            case "oficial":
                spanVenta.innerText = info[0].venta;
                spanCompra.innerText = info[0].compra;
                break;
            case "blue":
                spanVenta.innerText = info[1].venta;
                spanCompra.innerText = info[1].compra;
                break;
            case "bolsa":
                spanVenta.innerText = info[2].venta;
                spanCompra.innerText = info[2].compra;
                break;
            case "ccl":
                spanVenta.innerText = info[3].venta;
                spanCompra.innerText = info[3].compra;
                break;
            case "mayorista":
                spanVenta.innerText = info[4].venta;
                spanCompra.innerText = info[4].compra;
                break;
            case "cripto":
                spanVenta.innerText = info[5].venta;
                spanCompra.innerText = info[5].compra;
                break;
            case "tarjeta":
                spanVenta.innerText = info[6].venta;
                spanCompra.innerText = info[6].compra;
                break;
                
            // Puedes agregar más casos aquí según tus necesidades
            default:
                console.error("Tipo de dólar no reconocido");
                return;
    }} else {
        // Hacer la solicitud fetch utilizando la URL definida
    fetch("https://dolarapi.com/v1/dolares")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        sessionStorage.setItem("data", JSON.stringify(data));;
        fecha.innerText = new Date (data[0].fechaActualizacion);
        // Utilizar un switch para definir el tipo de cotizacion
        switch (tipoDolar) {
            case "oficial":
                spanVenta.innerText = data[0].venta;
                spanCompra.innerText = data[0].compra;
                break;
            case "blue":
                spanVenta.innerText = data[1].venta;
                spanCompra.innerText = data[1].compra;
                break;
            case "bolsa":
                spanVenta.innerText = data[2].venta;
                spanCompra.innerText = data[2].compra;
                break;
            case "ccl":
                spanVenta.innerText = data[3].venta;
                spanCompra.innerText = data[3].compra;
                break;
            case "mayorista":
                spanVenta.innerText = data[4].venta;
                spanCompra.innerText = data[4].compra;
                break;
            case "cripto":
                spanVenta.innerText = data[5].venta;
                spanCompra.innerText = data[5].compra;
                break;
            case "tarjeta":
                spanVenta.innerText = data[6].venta;
                spanCompra.innerText = data[6].compra;
                break;
                
            // Puedes agregar más casos aquí según tus necesidades
            default:
                console.error("Tipo de dólar no reconocido");
                return;
        }
    })
    .catch(error => console.error('Error:', error));


    }
    
}