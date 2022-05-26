// Funzioni //

function converteCelFahr(unitaGradi:string,valGradi:number) : number {
        
    if (unitaGradi == "c") {
        // converto in fahrenheit
        valGradi = (valGradi* 9/5) + 32; 
    }else if(unitaGradi == "f") {
        // converto in celsius
        valGradi = (valGradi - 32) *0.55; 
    }else {
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }
    return valGradi;
}


function converteKmMi(unitaDistanza:string,valDistanza:number) : number {
    
    if (unitaDistanza == "km") {
        // converto in miglia
        valDistanza = valDistanza / 1.609;
    }else if (unitaDistanza == "mi") {
        // converto in Kilometri
        valDistanza =  valDistanza * 1.609;
    }else {   
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }

    return valDistanza;
}

// Main //

//Prendo in input tutti i dati che servono al convertitore - tipoMisurazione, valoreMisurazione, unitaMisura
let tipoMisurazione:number = parseInt(prompt("Benvenuto, sono Gino il Convertitore. \n\nQuale tipo di misurazione vorresti convertire ?\n\n\Perfavore indica \n1 per i GRADI \n2 per la DISTANZA\n\n"));
let valoreMisurazione:number = parseInt(prompt("Bene, ora inserisci il valore che vuoi convertire :"));
let unitaMisura:string = prompt("Ancora un attimo, ho bisogno che mi specifichi l'unità di misura originale e ti restituirò il risultato della conversione :");


// Rispetto al tipo di misurazione scelta, richiamo e stampo la funzione che calcola il risultato 
if (tipoMisurazione == 1) {

console.log("Bene, hai scelto GRADI! \n\nIl risultato della conversione è " + converteCelFahr(unitaMisura,valoreMisurazione));

}else if (tipoMisurazione == 2) {

console.log("Bene, hai scelto DISTANZA! \n\nIl risultato della conversione è " + converteKmMi(unitaMisura,valoreMisurazione));

}else {

console.log( "Mi dispiace,non so effettuare ancora questo tipo di misurazione :(");
    }
