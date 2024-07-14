
function calcularArea (event){
    event.preventDefault(); 

    let altura = parseFloat(document.getElementById('altura').value)
    let base1 = parseFloat(document.getElementById('base1').value)
    let base2 = parseFloat(document.getElementById('base2').value)
    let lado1 = parseFloat(document.getElementById('lado1').value)
    let lado2 = parseFloat(document.getElementById('lado2').value)

    if (isNaN(altura) || isNaN(base1) || isNaN(base2) || isNaN(lado1) || isNaN(lado2) ) {
        alert("Por favor, ingresa valores válidos para las medidas.");
        return;
        }

    let area = ((base1 + base2) * altura) / 2;

    let litro = area * 1.5;

    let perimetro = lado1 + lado2 + base1 + base2;


    document.getElementById('area').innerText = `El area de de tu terreno es de: ${area.toFixed(2)} metros^2`;
    document.getElementById('litrosPorMetro').innerText = `Los litros de pestisida que debes aplicar a tus terrenos son: ${litro.toFixed(2)} Litros`;
    document.getElementById('perimetro').innerText = `La catidan necesari de serca electrica para rodea el terreno son:  ${perimetro.toFixed(2)} m`;

}