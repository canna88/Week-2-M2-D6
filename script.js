// Codice JavaScript
console.log("Benvenuto nel mio sito web!");


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeTitleH1 (text) {
    let myH1 = document.getElementsByTagName('h1')[0];
    if (text === undefined || text === "") {
      return; // Non fare nulla se il testo è vuoto o non definito
    }
    myH1.innerHTML = text;
  }

changeTitleH1()


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBodyColor(backgroundColor) {
    let myBody = document.getElementsByTagName('body')[0];
    if (backgroundColor === undefined || backgroundColor === "") {
        return; // Non fare nulla se il testo è vuoto o non definito
      } else {
        return myBody.style.backgroundColor = backgroundColor;
      }
    
}

changeBodyColor("")

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio


// ESERCIZIO 10: Scrivi una funzione per aggiungere una 
//classe CSS ad ogni link Amazon della tabella
/*
function addClassToLinksInProductCards(newClass) {
    let links = document.querySelectorAll('.product-card a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add(newClass);
    }
  }

addClassToLinksInProductCards("Alessio");
*/

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor(newPriceColor) {
    let priceElements = document.getElementsByClassName("product-price");
    
    if (newPriceColor === undefined || newPriceColor === "") {
      return; // Non fare nulla se il colore è vuoto o non definito
    }
    for (let i = 0; i < priceElements.length; i++) {
      priceElements[i].style.color = newPriceColor;
    }
  }
  
  changePriceColor("green");
  