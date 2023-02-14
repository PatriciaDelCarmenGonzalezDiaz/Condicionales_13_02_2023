//Condicional Switch: cuando tenemos varias opciones definidas
//y dependiendo del valor de esa opcion se realizara una operacion

let num1 = Number(prompt("Escribe el primer número"));
let num2 = Number(prompt("Escribe el segundo número"));
let operacion = Number(prompt("Operacion a realizar, 1->Suma 2->Resta 3->Multiplicacion 4->Division"));

switch (operacion) {
    case 1: console.warn(`${num1} + ${num2} = ${num1 + num2}`);
    break;
    case 2:console.warn(`${num1} - ${num2} = ${num1 - num2}`);
    break;
    case 3: console.warn(`${num1} * ${num2} = ${num1 * num2}`);
    break;
    case 4: console.warn(`${num1} / ${num2} = ${num1 / num2}`);
    break;
    default: console.warn("No dio un numero correcto para realizar una operación aritmética");
    break;
}