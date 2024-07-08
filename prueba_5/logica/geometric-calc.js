
// calculos para triangulo


function sumar(){
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    
    let area = num1 * num2;
    let perimeter = 2 * (num1 + num2);
    let diagonal = Math.sqrt((num1 * num1) + (num2 * num2));


    document.getElementById('area-calculate').value = area.toFixed(2);
    document.getElementById('perimeter-calculate').value = perimeter.toFixed(2);
    document.getElementById('diagonal-calculate').value = diagonal.toFixed(2);
}

// calculos para circulo

function caCircle() {
    let radio = parseFloat(document.getElementById('nC1').value);

    let areac = Math.PI * Math.pow(radio, 2);
    let circumference = 2 * Math.PI * radio;
    let diameter = 2 * radio;

    document.getElementById('diameter-circle').value = diameter.toFixed(2);
    document.getElementById('circumference-circle').value = circumference.toFixed(2);
    document.getElementById('area-circle').value = areac.toFixed(2);
}