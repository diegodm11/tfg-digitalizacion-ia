(function () {
  "use strict";

  function getCheckboxValue(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    return el.checked ? 1 : 0;
  }

  function sumIds(ids) {
    let total = 0;
    let i = 0;
    while (i < ids.length) {
      total += getCheckboxValue(ids[i]);
      i++;
    }
    return total;
  }

  function determinarFase(D, A, I, DD) {
    // Regla: progresión por mínimos (simple y defendible)
    // Fase 1: por defecto
    // Fase 2: D>=3 y A>=2
    // Fase 3: D>=3 y A>=3 y I>=2
    // Fase 4: D>=3 y A>=3 y I>=3 y DD>=2
    let fase = 1;

    if (D >= 3 && A >= 2) fase = 2;
    if (D >= 3 && A >= 3 && I >= 2) fase = 3;
    if (D >= 3 && A >= 3 && I >= 3 && DD >= 2) fase = 4;

    return fase;
  }

  function recomendacionPorFase(fase, tipo) {
    let rec = "";

    if (fase === 1) {
      rec = "Recomendación: priorizar digitalización básica (datos en digital, almacenamiento centralizado, herramientas de gestión) antes de automatizar.";
    } else if (fase === 2) {
      rec = "Recomendación: estandarizar procesos y automatizar tareas repetitivas con RPA. Medir tiempo ahorrado y reducir errores.";
    } else if (fase === 3) {
      rec = "Recomendación: integrar automatización inteligente (RPA + IA) usando OCR, NLP o clasificación para tratar información no estructurada.";
    } else {
      rec = "Recomendación: consolidar enfoque data-driven con KPIs, cuadros de mando y modelos predictivos; mejorar continuamente con datos.";
    }

    // Ajuste de énfasis por tipo (sin alterar fase)
    if (tipo === "A") {
      rec += " En Tipo A suele ser clave acelerar IA en tareas cognitivas y reporting.";
    } else if (tipo === "B") {
      rec += " En Tipo B suele ser clave reforzar trazabilidad, automatización operativa y calidad de datos.";
    }

    return rec;
  }

  function calcular() {
    const D = sumIds(["D1", "D2", "D3", "D4"]);
    const A = sumIds(["A1", "A2", "A3", "A4"]);
    const I = sumIds(["I1", "I2", "I3", "I4"]);
    const DD = sumIds(["DD1", "DD2", "DD3", "DD4"]);

    const tipoEl = document.getElementById("tipo");
    const tipo = tipoEl ? tipoEl.value : "A";

    const fase = determinarFase(D, A, I, DD);

    const faseFinalEl = document.getElementById("faseFinal");
    const puntuacionesEl = document.getElementById("puntuaciones");
    const recomendacionEl = document.getElementById("recomendacion");

    if (faseFinalEl) {
      faseFinalEl.innerText =
        "Fase estimada: Fase " + fase + " (modelo progresivo).";
    }

    if (puntuacionesEl) {
      puntuacionesEl.innerText =
        "Puntuación por bloques: Digitalización=" + D + "/4 | RPA=" + A + "/4 | RPA+IA=" + I + "/4 | Data-driven=" + DD + "/4";
    }

    if (recomendacionEl) {
      recomendacionEl.innerText = recomendacionPorFase(fase, tipo);
    }
  }

  function init() {
    const btn = document.getElementById("btnCalcular");
    if (btn) {
      btn.addEventListener("click", calcular);
    }
  }

  // Asegura que el DOM está listo (evita errores)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
