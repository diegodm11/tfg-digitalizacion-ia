// Simulador de crecimiento del PIB español según adopción de IA (2026-2030)

function simularPIB(adopcion) {
    const pibActual = 1400000; // PIB España en millones de euros aprox.

    let crecimiento = 0;

    if (adopcion === "lento") crecimiento = 0.02;      // 2% anual
    if (adopcion === "moderado") crecimiento = 0.05;   // 5% anual
    if (adopcion === "acelerado") crecimiento = 0.08;  // 8% anual

    const pib2030 = pibActual * Math.pow(1 + crecimiento, 4);

    return Math.round(pib2030);
}

// Mostrar resultados en consola
console.log("=== Simulador de PIB 2026–2030 ===");
console.log("Escenario lento:     ", simularPIB("lento"), "millones €");
console.log("Escenario moderado:  ", simularPIB("moderado"), "millones €");
console.log("Escenario acelerado: ", simularPIB("acelerado"), "millones €");
