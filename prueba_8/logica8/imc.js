function calcularIMC() {
    // Obtener los valores de los campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validar que los valores son números positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos para peso y altura.');
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Determinar la clasificación del IMC
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - Clasificación: ${clasificacion}`;
}
