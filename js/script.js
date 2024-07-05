// creo una funzione che mi che crea i quadrati da inserire nella  griglia
function createsquare() {
    let currerentElement = document.createElement('div');
    // assegno all'elemento la classe square
    currerentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile
    return currerentElement;
    
}