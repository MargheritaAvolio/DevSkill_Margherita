// ------------------------------------------- 1 AREA/PERIMETRO RETTANGOLO  ----------------------------------------------------//
// Scrivere un programma che:
// prende in input un numero a rappresentante la base di un rettangolo
// prende in input un numero b rappresentante l'altezza di un rettangolo
// Output :
// calcolare e restituire l'area del rettangolo
// calcolare e restituire il perimetro del rettangolo.


// Funzioni //

function calcolaAreaPerimRettangolo (): void {
    
    let base:number = parseInt(prompt("Inserisci il numero che rappresenta la base del rettangolo:"));
    let altezza:number = parseInt(prompt("Inserisci il numero che rappresenta l'area del rettangolo:"));
    
    let area = base * altezza;
    let perimetro = base * 2 + altezza * 2;

    console.log("L'area del rettangolo misura " + area + ", mentre il suo perimetro misura " + perimetro);
    console.log() ;
}

// Main //

calcolaAreaPerimRettangolo()

// ------------------------------------------- 2 CONCATENAZIONE ----------------------------------------------------//
// Scrivere un programma che:
// prende in input una parola a  
// prende in input una parola b
// Output:
// concatenazione di a con b
// concatenazione di b con a


// Funzioni

function concatena (): void {
    
    let a:string = (prompt("Inserisci una parola:"));
    let b:string = (prompt("Inserisci un'altra parola :"));
    
    let concatenazione = a + b;

    console.log("Il risultato della concatenazione è : " + concatenazione);
}


// Main

concatena()

// ------------------------------------------- 3 OPERAZIONI ----------------------------------------------------//
// Scrivere un programma che:
// prende in input un numero a  
// prende in input un numero b
// Output:
// somma di a con b
// sottrazione di a con b
// moltiplicazione di a con b 
// divisione di a con b



// Funzioni //

function calcolaRisultatoOper (): void {
    
    let a:number = parseInt(prompt("Inserisci il primo numero :"));
    let b:number = parseInt(prompt("Inserisci il secondo numero :"));
    
    let somma:number = a + b
    let differenza:number = a - b;
    let prodotto:number = a * b;
    let quoziente:number = a / b;
    
    //Restituisco la somma
    console.log("La somma è = " + somma);
    //Restituisco la differenza 
    console.log("La differenza è = " + differenza);
    //Restituisco il prodotto
    console.log("Il prodotto è = " + prodotto);
    //Restiuisco il quoziente
    console.log("Il quoziente è = " + quoziente);
}

// Main //

calcolaRisultatoOper()

// ------------------------------------------- 4 ANNO DI NASCITA ----------------------------------------------------//

/*Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni"; */

// Funzioni //

function calcolaEta () : void {
    let annoNascita:number = parseInt(prompt("Inserisci il tuo anno di nascita : "));
    let eta = 2022 - annoNascita;
    console.log("Complimenti, hai "+ eta + " anni")
}

// Main //

calcolaEta();

// ------------------------------------------- 5 BISESTILE ----------------------------------------------------//
/*
Si scriva un programma che preso in input un anno, stampi  se questo e` bisestile o meno.
Un anno si dice bisestile SE e SOLO SE :
    E` divisibile per 400
    E` divisibile per 4 ma non per 100
Input : 1600
Output : "l'anno e` bisestile";
Input : 1601
Otuput: "L'anno non e` bisestile";
Input : 1696
Otuput: "L'anno e` bisestile";
*/

// Funzioni //

function eBisestile (): string{
    
    let anno:number = prompt("Inserisci un anno, ti dirò se è bisestile =)")*1;


    if (anno%400==0){
        return("L'anno che hai inserito è bisestile!"); 
    }else if(anno%4==0){
        if(anno!=0){
            return("L'anno che hai inserito è bisestile!"); 
        }else{
            return("L'anno che hai inserito non è bisestile!");
        }
    }else{
    return("L'anno che hai inserito non è bisestile!"); 
    }
}

// Main //

console.log(eBisestile());

// ------------------------------------------- 6 LOWER CASE ----------------------------------------------------//

//Scrivere un programma che preso in input Il nome e cognome in maiuscolo li restituisca in minuscolo
// Cercare sul web come rendere una stringa "lowecase"

//  Funzioni //

function inputToLow () : string {                   
    
    // prende in input il nome e il cognome
    let nomeCognome:string = prompt("Inserisci il tuo Nome e Cognome");
    
    // trasforma la stringa in minuscolo
    let nomeCognomeLow = nomeCognome.toLowerCase();

    return nomeCognomeLow;
}

// Main //

console.log(inputToLow())


// ------------------------------------------- 7 UPPER CASE ----------------------------------------------------//

//Scrivere un programma che preso in input Il nome e cognome di una persona e li restituisca tutto in maiuscolo
// Cercare sul web come rendere una stringa "uppercase"

// Funzioni //

function inputToUpp () : string {                   
    
    // prende in input il nome e il cognome
    let nomeCognome:string = prompt("Inserisci il tuo Nome e Cognome");
    
    // trasforma la stringa in minuscolo
    let nomeCognomeLow = nomeCognome.toUpperCase();

    return nomeCognomeLow;
}

// Main //

console.log(inputToUpp())

// ------------------------------------------- 8 BMI/COSTITUZIONE ----------------------------------------------------//

// Funzioni //


// funzione per calcolare il BMI dai valori convertiti dell'altezza e del peso

function convertePoiCalcolaBMI(altezza1:number, peso1:number): number{
    
    //converto i valori nelle unità di mmisura che servono per il calcolo
    let altezza2:number = altezza1 / 3.281;
    let peso2:number = peso1 / 2.205;
    
    //calcolo il BMI
    let bmi: number = peso2 / ( altezza2 * altezza2);
    return bmi;
}

// funzione per calcolare il valore della corporatura

function corporaturaValore(bmi:number) : string {

    let costituzione = ""
    if (bmi <= 18.4) {
        costituzione = "sottopeso";
        if (bmi< 16.5) {
            costituzione = costituzione + " severo";
        }
        else if (bmi <= 24.9) {
            costituzione = "normale";
        }
    }
    else if (bmi <= 30) {
        costituzione = "sovrappeso";
    }
    else if (bmi <= 40) {
            costituzione = "obesità";
        if (bmi <= 34.9) {
                costituzione = (costituzione + " di primo grado");  
        }else{
                costituzione = (costituzione + "di secondo grado");
            }
    }else {
        costituzione = "gskianto =)"    
    }
    return costituzione;
}

// funzione per restituire il primo risultato e - in caso di risposta affermativa - anche il secondo

function primoRisultato(bmi:number, costituzione:string) {
    let risposta:string = prompt("Bene, la tua costituzione è : " + costituzione + " ! \n\n Che ne dici di appronfondire la misurazione? Mi basterebbero solo altri due dati... \n\n\n Inserisci si o no per procedere:");
    
    
    if (risposta == "si") {
    
        let circonferenza:number = parseInt(prompt ("Inserisci la misura della tua circonferenza - in cm : "));
        let sesso = prompt ("Inserisci il tuo sesso (donna / uomo ) : ");

        if (sesso == "donna") {

            if (circonferenza < 15) {
                costituzione = "esile";
            }else if (circonferenza <= 16) {
                costituzione = "normale";
            }else {
                costituzione = "robusta";
            }
        }else{
            if (circonferenza < 17) {
            costituzione = "esile";
            }else if (circonferenza <= 18) {
            costituzione = "normale";
            }else {
            costituzione = "robusta";
            }
        }
        
        if (sesso == "donna") {
        console.log("Ciao donna, la tua consituzione è : " + costituzione + ".\nRicorda...Sei sempre bella! Continua a lavorare su te stessa")
        }else{
        console.log("Ciao uomo, la tu cosituzione è : " + costituzione + ".\nRicorda...Sei sempre bello! Continua a lavorare su te stesso")
        }

    }else {
        console.log("Arrivederci e grazie!");
    }
    }

// Main //


//Prendo in input i valori dell'altezza(piede) e del peso(libre)
let altezza:number = parseInt(prompt("Inserisci in valore della tua altezza - in piedi : "));
let peso:number = parseInt(prompt("Inserisci il valore del tuo peso - in libre :"));


//Calcolo il BMI
let bmi = convertePoiCalcolaBMI(altezza,peso);

//Calcolo la costituzione
let costituzione = corporaturaValore(bmi);

//Restituisco i risultati (primo + eventuale secondo)
primoRisultato(bmi,costituzione)

// ------------------------------------------- 9 CONVERTITORE ----------------------------------------------------//

// Creare un convertitore di misurazioni, deve permettere la conversione di una misurazione da un unita` di misura ad un altra.
// Il programma dovra` chiedere all'utente quale tipo di misurazione vorrebbe convertire.
// le unita` di misura supportate sono riportate in tabella:
// Gradi    (1)    | centigradi (C) | fahrenheit (F)  |
// Distanza (2)    | kilometri (KM) | miglia (MI)     |
// L'utente puo` specificare il tipo di misurazione che vuole convertire usando 1 per gradi e 2 per distanza e successivamente
// fornire i seguenti valori : 
//      il valore misurato
//      l'unita` di misura originale
// Il programma dovra` restituire in output la conversione corretta .

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 1 
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 32
// Input: "Unita` di misura originale" C
// Output: "Il valore convertito e`: 89,6 F"

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 2
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 100
// Input: "Unita` di misura originale" KM
// Output: "Il valore convertito e`: 62,13 MI"


// Funzione //

function convertitore() : void {
    
    let tipoMisurazione:number = parseInt(prompt("Benvenuto, sono Gino il Convertitore. \n\nQuale tipo di misurazione vorresti convertire ?\n\n\Perfavore indica \n1 per i GRADI \n2 per la DISTANZA."))
    
    if (tipoMisurazione == 1) {
        
        let valore:number = parseInt(prompt("Bene, hai scelto GRADI! \n\nInserisci il valore originale :"));
        let unitaMisura:string = prompt("Inserisci l'unità di misura originale \n\n c --> Celsius ,\n f --> Fahrenheit");
        
        let valGradiConvertito = 0

        if (unitaMisura == "f") {
            // converto in celsius
            valGradiConvertito = (valore -32) * 0.55;
        
        }else if (unitaMisura == "c") {
            // converto in fahrenheit
            valGradiConvertito = (valore * 9/5) + 32; 
        }else {
            console.log("Mi dispiace,non so effettuare ancora la conversione di questa unità di misura :(");
        }

        console.log("Il valore convertito è: ", valGradiConvertito)

    }else if (tipoMisurazione == 2) {

        let unitaMisura:string =prompt("Bene, hai scelto DISTANZA! \n\nInserisci il valore originale :");
        let valore:number =  parseInt(prompt("Inserisci l'unità di misura originale \n\n km --> Kilometri  ,\n mi --> Miglia"));
        
        let valDistanzaConvertita = 0

        if (unitaMisura == "km") {
            // converto in miglia
            valDistanzaConvertita = valore * 1.609;
        
        }else if (unitaMisura == "mi") {
            // converto in kilometri
            valDistanzaConvertita = valore / 1.609;
        }else {
            console.log("Mi dispiace, non so effettuare ancora la conversione di questa unità di misura \n\n\n:(");
        }

        console.log("Il valore convertito è: ", valDistanzaConvertita )
    
    }else {
        
        console.log("Mi dispiace, non so effettuare ancora questo tipo di misurazione \n\n\n:(")
    }        
}


// Main //

convertitore()