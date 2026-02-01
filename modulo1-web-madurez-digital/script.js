function calcular() {
    let score = 0;

    if (document.getElementById("q1").checked) score++;
    if (document.getElementById("q2").checked) score++;
    if (document.getElementById("q3").checked) score++;
    if (document.getElementById("q4").checked) score++;
    if (document.getElementById("q5").checked) score++;

    let nivel = "";

    if (score <= 1) nivel = "Muy bajo";
    else if (score <= 3) nivel = "Intermedio";
    else nivel = "Avanzado";

    document.getElementById("resultado").innerText = 
        "Nivel de Madurez Digital: " + nivel;
}
