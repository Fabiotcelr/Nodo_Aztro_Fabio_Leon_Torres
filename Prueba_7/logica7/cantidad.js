function calcularPromedio(event) {
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    // Obtener los valores ingresados
    let tiempo1 = parseFloat(document.getElementById('tiempo1').value);
    let tiempo2 = parseFloat(document.getElementById('tiempo2').value);
    let tiempo3 = parseFloat(document.getElementById('tiempo3').value);
    let tiempo4 = parseFloat(document.getElementById('tiempo4').value);
    let tiempo5 = parseFloat(document.getElementById('tiempo5').value);

    // Verificar que todos los valores sean números
    if (isNaN(tiempo1) || isNaN(tiempo2) || isNaN(tiempo3) || isNaN(tiempo4) || isNaN(tiempo5)) {
        alert("Por favor, ingresa valores válidos para todas las pruebas.");
        return;
    }

    // Calcular la suma de los tiempos
    let suma = tiempo1 + tiempo2 + tiempo3 + tiempo4 + tiempo5;

    // Calcular el promedio
    let promedio = suma / 5;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `El promedio de los tiempos es: ${promedio.toFixed(2)} segundos`;
}