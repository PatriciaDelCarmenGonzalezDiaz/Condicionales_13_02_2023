//Condicional if_ else: solo evalua si una condicion es verdadera se realiza una accion
// si no se cumple esa condicion se realiza otra diferente

let peso = Number(prompt("Cual es su peso?"));

if (peso<=40) {
   console.log(`Con el peso de ${peso}, creo que estas a punto de morir, COME ALGO`);
} else if (peso > 40 && peso <= 70){
    console.log(`Con el peso de ${peso}, creo que estas en buena condicion`);
} else if (peso > 70 && peso < 90) {
    console.log(`Con el peso de ${peso}, creo que estas con un poco de sobrepeso`);
} else {
    console.log(`Con el peso de ${peso}, creo que estas con bastante sobrepeso`);
}