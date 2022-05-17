/*Si scriva un programma che, letta da input una lista di interi di 10 elementi, ed un numero 
intero X,  verifichi  stampi  la  stringa  “OK”  se  NESSUN  elemento  della lista  è  divisibile  per  X,  
e  la  stringa  “NO” altrimenti. 

ESEMPIO:    se  l’array  contenesse  gli  elementi    2,  7,  14,  10,  23,  5,  8,  11,  35,  77  e  X  fosse  3,  il 
programma stampare “OK”: infatti nessuno dei numeri contenuti nella lista è divisibile per 3. 
ATTENZIONE:  Si  noti  che  affinché  il  programma  possa  essere  gestito  dal  valutatore  automatico,  deve 
essere inviata in stampa solo ed esclusivamente UNA delle due stringhe (OK/NO) senza andare a capo 
e senza aggiungere spaziature, né altre stampe.*/

let sequenza:number[]=[]

while (sequenza.length <= 9){
    let numero:number=parseInt(prompt("Inserisci un numero della sequenza"))
    sequenza.push(numero)
  
}

let numero:number=parseInt(prompt("Inserisci il divisore"))
let esisteDivisibile:boolean=false

for (let i=0; i < sequenza.length; i++){

    if (sequenza[i] % numero == 0){
        esisteDivisibile = true
    }
}

if (esisteDivisibile){
    console.log("no")
}else{
    console.log("ok")
}



//----------------------------------------------------------------------------------------------------//

/*Scrivere un programma che, letti da input un intero positivo N ed una sequenza di interi positivi 
terminata dal tappo -1, verifichi se esistono almeno N elementi consecutivi della sequenza minori 
o uguali ad N. 
Il programma dovrà stampare la stringa OK se l'intero ricevuto soddisfa la condizione richiesta, NO 
altrimenti. 
ATTENZIONE: Si noti che affinché il programma possa essere gestito dal valutatore automatico, 
deve essere inviata in stampa esclusivamente una tra le stringhe OK/NO, senza andare a capo e 
senza spaziature o altre stampe. 
ESEMPI: 
 Se N fosse pari a 5 e la sequenza fosse 1 3 5 3 1 2 9 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 3 e la sequenza fosse 1 0 5 2 2 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 4 e la sequenza fosse 1 0 4 8 6 3 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 2 e la sequenza fosse 2 2 3 3 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 8 e la sequenza fosse 4 2 6 7 8 9 -1 il programma dovrebbe stampare NO
 Se N fosse pari a 1 e la sequenza fosse 0 -1 il programma dovrebbe stampare OK
 Se N fosse pari a 1 e la sequenza fosse -1 il programma dovrebbe stampare NO */

let numero:number=parseInt(prompt("Inserisci un numero della sequenza"))
let sequenza:number[]=[]

while (numero != -1){

    sequenza.push(numero)
    numero = parseInt(prompt("Inserisci un numero della sequenza"))
  
}

let n:number=parseInt(prompt("Inserisci un numero intero positivo"))
let contatore:number= 0
let condizione:boolean= false

for(let i=0; i < sequenza.length; i++){

    if(sequenza[i] <= n){
        contatore ++

        if(contatore == n){
            condizione = true
        }
    }else {

        contatore = 0
        
    }
}

if (condizione){
    console.log("ok")
}else{
    console.log("no")
}

//----------------------------------------------------------------------------------------------------//

/*Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  un  tappo  pari  a  0 
(ZERO), stampi SI se la sequenza ha un andamento strettamente crescente fino ad un certo punto e un 
andamento strettamente decrescente dal quel punto in poi; stampi NO altrimenti. 
ATTENZIONE:  Stampare  solo  una  delle  stringhe  SI/NO  senza  aggiungere  altre  spaziature  o  andare  a 
capo. 

ESEMPI 
- Se la sequenza in input fosse 
0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
3 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
1 3 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
3 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
1 2 4 3 2 0 
Il programma dovrebbe stampare SI. 
- Se la sequenza in input fosse 
-1 2 1 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
-1 -1 2 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
-1 2 25 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare SI. 
- Se la sequenza in input fosse 
-1 2 25 2 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare NO.*/


let numero:number=parseInt(prompt("Inserisci un numero della sequenza"))
let sequenza:number[]=[]



while (numero != 0){

    sequenza.push(numero)
    numero = parseInt(prompt("Inserisci un numero della sequenza"))
  
}

let andamentoDecrescente:boolean = false
let andamentoCrescente:boolean = false
let condizione:boolean=true


for(let i=0; i<sequenza.length-1; i++){

    if(sequenza[i] > sequenza[i+1]){

        if(andamentoDecrescente == false){
          andamentoDecrescente = true  
        }
        
    }else{

        andamentoCrescente = true

        if(andamentoDecrescente){
            condizione = false
        }
    }
}

if (condizione && andamentoCrescente && andamentoDecrescente){
    console.log("si")
}else{
    console.log("no")
}
//----------------------------------------------------------------------------------------------------//



/*
Scrivere un programma che, letti da input in quest’ordine un intero X, un intero N e una sequenza di N 
interi, stampi tutti i numeri pari strettamente minori di X presenti all’interno della sequenza.  
ATTENZIONE:  Si  noti  che  affinché  il  programma  possa  essere  gestito  dal  valutatore  automatico, 
devono essere inviati in stampa solo ed esclusivamente i numeri che rispettano la condizione richiesta, 
senza  andare  a  capo  e  senza aggiungere spazi  o  altre  stampe  (neppure  quelle  che  possono 
accompagnare l'istruzione input per comunicare a chi esegue il programma che dati inserire).  
ESEMPI: 
- Se X fosse 10, N fosse 7 e la sequenza di numeri fosse 12 32 15 2 4 9 18,  il programma dovrebbe  
stampare 24 poiché 2 e 4 sono gli unici numeri pari nella sequenza minori di 10. Si noti come 
non siano presenti spazi a separare i numeri stampati.
- Se X fosse 0, N fosse 8 e la sequenza di numeri fosse 14 12 32 15 2 4 9 18, il programma non dovrebbe 
stampare nulla poichè tutti i numeri pari nella sequenza sono maggiori di 0. 
- Se X fosse 30, N fosse 4 e la sequenza di numeri fosse 15 1 15 3,  il programma non dovrebbe 
stampare nulla poichè non ci sono numeri pari nella sequenza.*/


let x:number=parseInt(prompt("Inserisci un intero X :"))

let n:number=parseInt(prompt("Inserisci un intero N :"))

let sequenza:number[]=[]

let risultatoStringa:string=""

while(sequenza.length< n){
    let numero:number=parseInt(prompt("Inserisci un numero da inserire nella sequenza"))
    sequenza.push(numero)
}

for(let i = 0; i< sequenza.length; i++){

    if(sequenza[i]%2 == 0 && sequenza[i]<x){
        risultatoStringa += sequenza[i]
    }
}

if (risultatoStringa != ""){
  console.log(risultatoStringa)  
}


//----------------------------------------------------------------------------------------------------//

/* 
Scrivere un programma che, letto da input un intero positivo N stampi il valore N-Ninv, dove Ninv è l’intero 
che si ottiene da N invertendo le sue cifre. 
Esempi 
Per N=12345, Ninv=54321 e il programma dovrà stampare -41976 (che è il risultato della sottrazione 12345-
54321. 
Per N=327, Ninv=723 e il programma dovrà stampare 396 (che è il risultato della sottrazione 327-723). 
Per N=0, Ninv=0 e il programma dovrà stampare 0. 
Per N =111111, Ninv=111111 e il programma dovrà stampare 0. 
Attenzione, è necessario inviare in stampa solo il risultato dell’operazione, senza andare a capo, senza spaziature, 
o stampe di altro genere.
*/


let n:number = parseInt(prompt("inserisci un intero N :"))
let numeroInvertito:number = 0



for(let i= n.toString().length -1; i >=0; i--){
    console.log(numeroInvertito)
    numeroInvertito *= 10
    numeroInvertito += n.toString()[i]*1
}

console.log(numeroInvertito)



//////////////////////////////////////////////////
//Altra soluzione//


let n:number = parseInt(prompt("inserisci un intero N :"))
let splitStringa:string[] = n.toString().split("")

let arrayInverso:string[]= splitStringa.reverse()

let joinArray:number = arrayInverso.join("")*1

console.log(n-joinArray)



//----------------------------------------------------------------------------------------------------//




/*Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  -1,  controlli  che  siano 
tutte cifre decimali (ovvero numeri compresi tra 0 e9), calcoli il numero che si ottiene giustapponendo le
cifre,  e  verifichi  se  il  numero  ottenuto  è  divisibile  per  3.  Più  in  dettaglio, l’output del programma deve 
rispettare le seguenti condizioni: 
1) Se uno dei valori inseriti da input non è una cifra decimale, deve essere stampata esclusivamente la
stringa ERRORE senza andare a capo e senza spaziature.
ESEMPIO: Se la sequenza in input fosse 2 5 9 15 1 -1 il programma dovrebbe stampare:
ERRORE
2) Se i valori inseriti sono tutte cifre decimali, deve essere inviato in stampa il numero che si ottiene 
giustapponendo le cifre e sulla riga successiva, la stringa SI (senza andare a capo e senza 
spaziature) se il numero è divisibile per 3, la stringa NO (senza andare a capo e senza spaziature), 
altrimenti.

ESEMPIO: Se la sequenza in input fosse 2 5 9 1 1 -1 il programma dovrebbe stampare:
25911 
SI 
ESEMPIO: Se la sequenza in input fosse 2 5 9 1 -1 il programma dovrebbe stampare: 
2591 
NO 
3) Se la sequenza in input è vuota, stampare esclusivamente la stringa VUOTO, senza andare
a capo e senza spaziature.
ESEMPIO: Se la sequenza in input fosse  -1 il programma dovrebbe stampare:
VUOTO
*/


let n:number= parseInt(prompt("Inserisci un numero"))
let errore:boolean= false
let stringa:string =""

while(n != -1){

    if (!(n >= 0 && n <= 9)){
        errore= true
    }
    stringa += n
    n= parseInt(prompt("Inserisci un numero"))
    
}

if(errore){
    console.log("errore")
}else if (stringa == ""){
    console.log("vuoto")
}else{

    console.log(stringa*1)

    if((stringa*1) % 3 == 0){
        console.log("si")
    }else{
        console.log("no")
    }
}
