import java.util.Scanner;

public class ImpactoIA {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Calculadora de Impacto Económico de IA ===");

        System.out.print("Horas semanales automatizables: ");
        double horas = sc.nextDouble();

        System.out.print("Coste por hora (€): ");
        double costeHora = sc.nextDouble();

        System.out.print("Porcentaje de automatización (0 a 1): ");
        double auto = sc.nextDouble();

        // Cálculo del ahorro anual
        double ahorroSemanal = horas * costeHora * auto;
        double ahorroAnual = ahorroSemanal * 52;
        double ahorro5Anios = ahorroAnual * 5;

        System.out.println("\n--- Resultados ---");
        System.out.println("Ahorro anual estimado: " + Math.round(ahorroAnual) + " €");
        System.out.println("Ahorro a 5 años: " + Math.round(ahorro5Anios) + " €");

        // Impacto estimado en productividad
        double productividad = auto * 100;
        System.out.println("Incremento aproximado de productividad: " + productividad + "%");
    }
}
