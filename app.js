let secretNumber = 0;
let attempt = 1;
let maxAttempts = 3;

function assignText(element, text) {
    let elementHtml = document.querySelector(element);
    elementHtml.innerHTML = text;
}

function generaterNumber() {
    let number = Math.floor(Math.random() * 10) + 1;
    return number;
}

function initialize() {
    assignText('h1', 'Adivina el Número');
    assignText('p', 'Elige un número del 1 al 10');
    secretNumber = generaterNumber();
    console.log(secretNumber, 'número secreto');
    attempt = 1;
    document.getElementById('restart').setAttribute('disabled', 'true');
    document.getElementById('attempt').removeAttribute('disabled');
    document.getElementById('userNumber').removeAttribute('disabled');
    img('img/what.png');
}

function verifyNumber() {
    let userNumber = parseInt(document.getElementById('userNumber').value); // Obtiene el valor del número ingresado por el usuario
    console.log(attempt, 'intentos'); // Muestra en consola el número de intentos

    // Compara el número ingresado por el usuario con el número secreto
    if (secretNumber === userNumber) {
        assignText('p', `Acertaste el número en ${attempt} ${(attempt === 1) ? 'intento' : 'intentos'}`); // Mensaje de acierto
        document.getElementById('restart').removeAttribute('disabled'); // Habilita el botón de reinicio
        noAttmepts();
        img('img/good.png')
    } else {
        if (secretNumber > userNumber) {
            assignText('p', 'El número secreto es mayor'); // Mensaje si el número secreto es mayor
        } else if (secretNumber < userNumber) {
            assignText('p', 'El número secreto es menor'); // Mensaje si el número secreto es menor
        }
        attempt++; // Incrementa el contador de intentos
        document.querySelector('input').value = '';
        if (attempt > maxAttempts) {
            assignText('p', 'Alcanzaste el número máximo de intentos');
            document.getElementById('restart').removeAttribute('disabled'); // Habilita el botón de reinicio
            noAttmepts()
            img('img/angry.png');
        }
        return;
    }
}
//no mas intentos
function noAttmepts(){
    document.getElementById('attempt').setAttribute('disabled','true');
    document.getElementById('userNumber').setAttribute('disabled', 'true');
    clearBox();
    return;
}
// cambio de imagen
function img(paint){
    
    let myPicture = document.getElementById('picture');
    myPicture.src = paint;
}
//  limpiar caja 
function clearBox(){
    document.querySelector('input').value = '';
}

initialize();
