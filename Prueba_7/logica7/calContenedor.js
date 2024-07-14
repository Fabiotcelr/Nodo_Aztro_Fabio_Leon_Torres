function calLadrillos(event) {
    event.preventDefault(); 

    let altPared = parseFloat(document.getElementById('altPared').value);
    let ancPared = parseFloat(document.getElementById('ancPared').value);
    let altLadrillo = parseFloat(document.getElementById('altLadrillo').value);
    let ancLadrillo = parseFloat(document.getElementById('ancLadrillo').value);
    let espesor = parseFloat(document.getElementById('espesor').value);
    let desperdicio = document.getElementById('desperdicio').value;

    
    if (isNaN(altPared) || isNaN(ancPared) || isNaN(altLadrillo) || isNaN(ancLadrillo) || isNaN(espesor)) {
        alert("Por favor, ingresa valores válidos en (m) para realizar el cálculo.");
        return;
    }

    let areaPa = altPared * ancPared;
    let altLaMo = altLadrillo + espesor;
    let ancLaMo = ancLadrillo + espesor;
    let areaLa = altLaMo * ancLaMo;

    let numLadrillos = areaPa / areaLa;

    
    document.getElementById('areaPared').innerText = `El área de la pared es de: ${areaPa.toFixed(2)} metros cuadrados`;
    document.getElementById('ladrillos').innerText = `La cantidad de ladrillos que necesitas es de: ${numLadrillos.toFixed(2)} unidades`;

    
    if (desperdicio.trim() !== '') {
        let desperdicioValor = parseFloat(desperdicio);
        if (!isNaN(desperdicioValor)) { 
            let calDesperdicio = numLadrillos * (1 + desperdicioValor / 100);
            document.getElementById('desLadrillos').innerText = `La cantidad de ladrillos que necesitas, teniendo en cuenta el desperdicio, es de: ${calDesperdicio.toFixed(2)} unidades`;
        } 
    } else {
        document.getElementById('desLadrillos').innerText = "Si ingresa el % de desperdicio tendras un calculo as exacto.";
    }
}
