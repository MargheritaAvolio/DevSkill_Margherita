// Creare un software che calcoli il BMI di una persona dato : altezza ( piedi ) , peso ( libre )
// BMI = peso in kg / (statura in metri * statura in metri)
// E stampi in output la corrispettiva costituzione in base alla tabella :
//Sottopeso severo  < 16,5
//Sottopeso da 16,5 a 18,4
//Normale   da 18,5 a 24,9
//Sovrappeso    da 25 a 30
//Obesità primo grado   da 30,1 a 34,9
//Obesità secondo grado da 35 a 40
//gskianto  > 40
// Dopo aver mostrato a schermo il risulato , verra` chiesto all'utente se vuole effettuare una misurazione
// piu` precisa. Se la risposta e` affermativa,
// viene chiesto un parametro aggiuntivo : circonferenza polso ( cm ) e il sesso . Venga stampata la
// rispettiva costituzione seguendo la seguente tabella :
// Donna    Costituzione    Uomo
// < 15     Esile           < 17
// 15-16    Normale         17-18
// > 16     Robusta         > 18
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: si
//Output : Inserisci la circonferenza del polso e il tuo sesso
//Input: 17 M
//Output: La tua costituzione e` : NORMALE
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: No
//Output : Arrivederci

// Prendo in input i valori dell'altezza in piedi e del peso in libre
let altezzaPiedi:number = prompt("Inserisci in valore della tua altezza - in piedi : ") *1 ;
let pesoLibre:number = prompt("Inserisci il valore del tuo peso - in libre :") *1 ;

// Converto i valori dell'altezza e del peso nelle unità di misura che mi servono per il calcolo del bmi (m/kg)
let altezza:number = altezzaPiedi /  3.281; 
let peso:number = pesoLibre / 2.205;

// calcolo il BMI
let bmi: number = peso / ( altezza * altezza);

// Inizializzo una variabile di tipo stringa in cui salverò la corporatura - risultato del calcolo seguente
let costituzione:string = "";

// Ricavo la corporatura dalla misura del BMI
if (bmi <= 18.4) {
    costituzione = "sottopeso";
    if (bmi< 16.5) {
        costituzione = costituzione + " severo";
    }
}
else if (bmi <= 24.9) {
    costituzione = "normale";
}
else if (bmi <= 30) {
    costituzione = "sovrappeso";
}
else if (bmi <= 40) {
    costituzione = "obesità";
    if (bmi <= 34.9) {
        costituzione = costituzione + " di primo grado";  
    }else{
        costituzione = costituzione + "di secondo grado";
    }
}else {
    costituzione = "gskianto =)"   
}

// Stampo a schermo il risultato, e chiedo se l'utente vuole procedere in un calcolo più approfondito
let risposta:string = prompt("Bene, la tua costituzione è : " + costituzione + " ! \n\n Che ne dici di appronfondire la misurazione? Mi basterebbero solo altri due dati... \n\n\n Inserisci si o no per procedere:");



if (risposta == "si") {
    
    let circonferenza:number = prompt ("Inserisci la misura della tua circonferenza - in cm : ") * 1;
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
