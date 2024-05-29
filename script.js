document.addEventListener("DOMContentLoaded", function() {
    function calculate() {
        const oilType = parseFloat(document.getElementById('oilType').value);
        const lyeType = document.getElementById('lyeType').value;
        const soapAmount = parseFloat(document.getElementById('soapAmount').value);

        if (isNaN(soapAmount)) {
            document.getElementById('result').textContent = 'Por favor, ingrese valores válidos.';
            return;
        }

        // Factores de conversión de KOH a NaOH
        const KOH_TO_NAOH_RATIO = 1.4025;
        let lyeAmount = 0;

        // Calcular la cantidad de aceite necesaria
        const oilAmount = soapAmount / (1 + oilType);

        // Calcular la cantidad de sosa o potasio necesaria
        if (lyeType === 'naoh') {
            lyeAmount = oilAmount * oilType;
        } else if (lyeType === 'koh') {
            lyeAmount = oilAmount * oilType * KOH_TO_NAOH_RATIO;
        }

        const result = `Para producir ${soapAmount} gramos de jabón, necesitas ${oilAmount.toFixed(2)} gramos de ${document.getElementById('oilType').selectedOptions[0].text.toLowerCase()} y ${lyeAmount.toFixed(2)} gramos de ${lyeType.toUpperCase()}.`;
        document.getElementById('result').textContent = result;
    }

    // Asigna la función calculate al botón
    document.querySelector("button").addEventListener("click", calculate);
});
