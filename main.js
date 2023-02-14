//Condicional if_ else: solo evalua si una condicion es verdadera se realiza una accion
// si no se cumple esa condicion se realiza otra diferente

let peso = Number(prompt("Cual es su peso?"));

if (peso> 70) {
   console.log(`Con el peso de ${peso}, creo que estas gordito`);
} else {
    console.log(`Con el peso de ${peso}, creo que estas flaquito`)
}