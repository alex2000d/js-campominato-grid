// creo una funzione che mi che crea i quadrati da inserire nella  griglia
function createsquare() {
    let currerentElement = document.createElement('div');
    // assegno all'elemento la classe square
    currerentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile
    return currerentElement;
    
}
// recupero l'elemento che contiene la mia griglia
const grid = document.getElementById('grid');

for( let i = 0; i < 100; i++){
    let currerentSquare = createsquare();

    currerentSquare.addEventListener('click', function(){
     this.classList.toggle('clicked');
     console.log(this);
    })
    
}