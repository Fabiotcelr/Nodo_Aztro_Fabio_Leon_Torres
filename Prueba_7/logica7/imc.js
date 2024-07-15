function calcularIMC() {
    
    const pesoPe = parseFloat(document.getElementById('pesoPe').value);
    const alturaPe = parseFloat(document.getElementById('alturaPe').value);

    
    if (isNaN(pesoPe) || isNaN(alturaPe) || pesoPe <= 0 || alturaPe <= 0) {
        alert('Por favor, ingrese valores válidos para pesoPe y alturaPe.');
        return;
    }

    
    const imc = pesoPe / (alturaPe * alturaPe);

    
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = 'Bajo pesoPe';
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = 'pesoPe normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    
    document.getElementById('resultadoImc').innerText = `Tu índice de masa corporal (IMC) es: ${imc.toFixed(2)} kg/m2`;
    document.getElementById('resultadoObs').innerText = ` Por lo tanto los resultado te ubican en esta Clasificación: ${clasificacion}, si bajas puedes ver recomendaciones`;
}
