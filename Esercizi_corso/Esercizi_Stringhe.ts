// Verificare se una parola e` palindroma .
// Una parola si dice palindroma se letta al contrario ha lo stesso valore
// es. otto anna ossesso
// Creare un programma che letta in input una parola,
// restituisca true se la parola e` palindroma
// falso se non lo e`.



let stringa:string = prompt("Inserisci una parola per verificare che sia palindroma oppure no: ")
let risultato:string = "La stringa inserita è palindroma"
let ePalindroma: boolean = true



for (let i= 0, j = stringa.length-1 ; i< j; i++, j--) {
    /* Ad ogni iterazione controllo i due valori che si 
    trovano nelle posizioni puntate dai due indici.
    Se sono diversi il contenuto di 'word' non sarà palindroma */
    if (stringa.charAt(j) != stringa.charAt(i)) {
        ePalindroma = false;
        break;
    }else{
        ePalindroma
    } 
}


if (ePalindroma) {
    console.log(risultato)
} else {
    console.log(risultato.substring(0,20) + "non" + risultato.substring(19,33))
}

//—————————————————————————————————————————————————————————————————————————————//

// Prese in input due parole
// Creare una terza parola, composta dalla prima e dall'inverso della seconda.
// input  : ciao
// input  : pizza
// output : ciaoazzip

let parola1:string = prompt("Inserisci una parola: ")
let parola2:string = prompt("Inserisci un'altra parola: ")
let parola3:string;

let inversoParola2= "" 
for(let i = parola2.length- 1; i >= 0; i--){
    inversoParola2 += parola2[i]
}


parola3= parola1.concat(inversoParola2)
console.log(parola3)
//oppure

//—————————————————————————————————————————————————————————————————————————————//

// Prese in input due parole
// Creare una terza parola, composta dalle lettere della prima e della seconda in maniera alternata.
// input  : ciaop
// input  : pizza
// output : ciazp

let parola1:string = prompt("Inserisci una parola: ")
let parola2:string = prompt("Inserisci un'altra parola: ")
let parola3:string= ""



for(let i = 0; i < parola1.length; i++){
    if(i%2== 0){
    parola3 += parola1[i];
    }else{
    parola3 += parola2[i]
    }
}

console.log(parola3)


