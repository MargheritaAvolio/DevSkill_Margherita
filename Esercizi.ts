/*
Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
i valori dell'array B
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 8, 4 ,10 ,6];
 */


let sequenzaA:number[] = [];
let sequenzaB:number[] = [];
let dimensioneSequenza:number=parseInt(prompt("Sceglia la dimensione della sequenza, mimino 5 massimo 10"))

let numero:number;

for (let i=1; i<=dimensioneSequenza; i++){
    numero = parseInt(prompt("Inserisci un numero per rimepire l'array a")); 
    sequenzaA.push(numero);
    numero = parseInt(prompt("Inserisci un numero per riempire l'array b"));
    sequenzaB.push(numero)
}


let sequenzaC:number[]=[]

for (let i=0; i<dimensioneSequenza; i++){
    if (i %2==0){
    sequenzaC.push(sequenzaA[i]);
    }
    else{
        sequenzaC.push(sequenzaB[i]);
    }
}

console.log(sequenzaC)

/*
Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
a M inserite i valori di B al contrario
Considerare 0 come pari
InputN: 5
InputM: 7
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];
 */


/*
Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
a M inserite i valori di B al contrario
Considerare 0 come pari
InputN: 5
InputM: 7
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];
*/


let sequenzaA:number[] = [];
let sequenzaB:number[] = [];
let dimensioneSequenzaN:number=parseInt(prompt("Sceglia la dimensione della sequenzaA, mimino 5 massimo 10"))
let dimensioneSequenzaM:number=parseInt(prompt("Sceglia la dimensione della sequenzaB, mimino 5 massimo 10"))
let numero:number;

for (let i=1; i<=dimensioneSequenzaN; i++){
    numero = parseInt(prompt("Inserisci un numero per rimepire l'array a")); 
    sequenzaA.push(numero);
}

for (let i=1; i<=dimensioneSequenzaM; i++ ){
    numero = parseInt(prompt("Inserisci un numero per riempire l'array b"));
    sequenzaB.push(numero)
}


let sequenzaC:number[]=[]
let count:number=0
let dimensioneSequenzaTotale:number = dimensioneSequenzaM+ dimensioneSequenzaN

for (let i=1; i<dimensioneSequenzaTotale; i++){
    
    if(i < dimensioneSequenzaN){
        sequenzaC.push(sequenzaA[i])
    }else{
        sequenzaC.push(sequenzaB[5-count])
        count ++
    }

}

console.log(sequenzaC)


-----------------------------------
let sequenzaA:number[] = [];
let sequenzaB:number[] = [];

let numero:number;

for (let i=0; i<5; i++){
    numero = parseInt(prompt("Inserisci un numero per rimepire l'array a")); 
    sequenzaA.push(numero);
}

for (let i=0; i<6; i++ ){
    numero = parseInt(prompt("Inserisci un numero per riempire l'array b"));
    sequenzaB.push(numero)
}


let sequenzaC:number[]=[]
let count:number=0

for (let i=0; i<11; i++){
    
    if(i < 5){
        sequenzaC.push(sequenzaA[i])
    }else{
        sequenzaC.push(sequenzaB[5-count])
        count ++
    }

}

/*
Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse
Es.
Input: 0 1 3 4 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 9 con lunghezza 5
Input: 0 1 3 4 5 8 4 3 2 1 0 9 3 2 1 9 -1
Output : Non esiste una sequenza valida
Input: 0 1 3 4 5 5 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 5 con lunghezza 5
*/

let n:number= parseInt(prompt("numeri :"))
let sequenza:number[]= []

while(n != -1){
    sequenza.push(n)
    n= parseInt(prompt("numeri :"))
}

let lunghezzaCorrente:number=0
let numeroconf:number = sequenza[0]



let lunghezzaMax:number=0
let numeroMaxS: number=0

for (let i=0; i<sequenza.length; i++){
    if(numeroconf == sequenza[i]){
        lunghezzaCorrente ++
    }else{
        if(lunghezzaCorrente>lunghezzaMax){
            lunghezzaMax= lunghezzaCorrente
            numeroMaxS= numeroconf
        }
        numeroconf=sequenza[i];
        
        lunghezzaCorrente=1
    }
}


console.log(lunghezzaMax , " ", numeroMaxS)

/*
Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse
Es.
Input: 0 1 3 4 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 9 con lunghezza 5
Input: 0 1 3 4 5 8 4 3 2 1 0 9 3 2 1 9 -1
Output : Non esiste una sequenza valida
Input: 0 1 3 4 5 5 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 5 con lunghezza 5
*/

let n:number= parseInt(prompt("Inserisci una sequenza di numeri , -1 per terminare  :"))
let sequenza:number[]= []


while(n != -1){
    sequenza.push(n)
    n= parseInt(prompt("Inserisci una sequenza di numeri , -1 per terminare  :"))
}

let lunghezzaCorrente:number=1
let numeroconf:number = sequenza[0]



let lunghezzaMax:number=0
let numeroMaxS: number=sequenza[0]

for (let i=0; i<=sequenza.length; i++){
    
    
    if(numeroconf == sequenza[i]){
        lunghezzaCorrente ++

    }else{

        if(lunghezzaCorrente>lunghezzaMax){
            lunghezzaMax= lunghezzaCorrente
            numeroMaxS= numeroconf
        }
        numeroconf=sequenza[i];
        lunghezzaCorrente=1
    }
}



console.log("La sequenza ripetuta più lunga è quella del numero " + numeroMaxS+ " e viene ripetuta "+ lunghezzaMax + " volte." )