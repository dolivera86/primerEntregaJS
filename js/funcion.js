const resultado = 18;
let conteo = 0;
let correcto = false;

function multiplicaYviaja() {

    while (correcto === false) {

        const adivina = parseInt(prompt('Adivina el número que multiplicado por 16 el resultado es 288. El rango que puedes múltiplicar es entre 10 y 20. Mucha suerte. Si aciertas ganas un viaje al Caribe!!!'));
        conteo++;
    
        if (adivina === resultado) {
            alert('Ganaste lo lograste en el intento N°' + conteo + ' ve armando las valijas!!!');
            correcto = true;
    
        } else if (adivina >= 22) {
            alert('Debes múltipicar por un número más bajo, estás lejos. Tú puedes!!!');
    
        } else if (adivina >= 19 && adivina <= 21) {
            alert('Estas a pasos de adivinar y ganar, te doy una pista es un poco más bajo del número ingresado, tú puedes!!!');
    
        } else if (adivina <= 13) {
            alert('Debes múltiplicar por un número más grande, estás lejos. Tú puedes!!!');
    
        } else if (adivina >= 14 && adivina <= 17) {
            alert('Estas a pasos de adivinar y ganar!!!');
    
        } else {
            alert('Valor ingresado incorrecto, ingresa un valor númerico. Mucha suerte!!!');
        }
    }
}
