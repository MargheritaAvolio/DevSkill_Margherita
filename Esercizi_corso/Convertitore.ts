// Funzioni //

function converteCelinFahr(unitaGradi:string,valGradi:number) : number {
        
    if (unitaGradi == "c") {
        // converto in fahrenheit
        valGradi = (valGradi* 9/5) + 32; 
    }else {
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }
    return valGradi;
}

function converteFahrinCel(unitaGradi:string,valGradi:number) : number {
    
    if (unitaGradi == "c") {
        // converto in celsius
        valGradi = (valGradi - 32) *0.55; 
    }else {
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }
    return valGradi;
}

function converteKminMi(unitaDistanza:string,valDistanza:number) : number {
    
    if (unitaDistanza == "km") {
        // converto in miglia
        valDistanza = valDistanza / 1.609;
    }else {
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }
    return valDistanza;
}

function converteMiinKm(unitaDistanza:string,valDistanza:number) : number {
    
    if (unitaDistanza == "mi") {
        // converto in Kilometri
        valDistanza =  valDistanza * 1.609;
    }else {
        console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
    }
    return valDistanza;
}

// Main //


let tipoMisurazione:number = parseInt(prompt("Benvenuto, sono Gino il Convertitore. \n\nQuale tipo di misurazione vorresti convertire ?\n\n\Perfavore indica \n1 per i GRADI \n2 per la DISTANZA\n\n"));


let valoreMisurazione:number = parseInt(prompt("Bene, ora inserisci il valore che vuoi convertire :"));
let unitaMisura:string = prompt("Ancora un attimo, ho bisogno che mi specifichi l'unità di misura originale e ti restituirò il risultato della conversione :");


if (tipoMisurazione == 1) {

let risultatoConversione:string = "Bene, hai scelto GRADI! \n\nIl risultato della conversione è "

if (unitaMisura == "c") {
     // converto in fahrenheit
    risultatoConversione = risultatoConversione + converteCelinFahr(unitaMisura,valoreMisurazione);
    
}else if (unitaMisura == "f") {
        // converto in celsius
    risultatoConversione = risultatoConversione + converteFahrinCel(unitaMisura,valoreMisurazione);

}else {
    console.log("Mi dispiace,non so effettuare ancora questo tipo di misurazione :(");
    }
console.log(risultatoConversione)
}else if (tipoMisurazione == 2) {

let risultatoConversione:string = "Bene, hai scelto DISTANZA! \n\nIl risultato della conversione è "

if (unitaMisura == "km") {
     // converto in Miglia
    risultatoConversione = risultatoConversione + converteKminMi(unitaMisura,valoreMisurazione);
    
}else if (unitaMisura == "mi") {
        // converto in Kilometri
    risultatoConversione = risultatoConversione + converteMiinKm(unitaMisura,valoreMisurazione);

}else {
    console.log("Mi dispiace,non so effettuare ancora questo tipo di misurazione :(");
    }
console.log(risultatoConversione)
}