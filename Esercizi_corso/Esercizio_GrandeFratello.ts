let cod : string[] = [];
let codice : string[] = [];

cod = riempiArray();

for( let i = 0 ; i < cod.length ; i++){

	codice = cod[i].split("");

	esegui(codice);

}

function esegui (codice: string[]) : void{

	if(!controllaValidita(codice))
	console.log("No successor");
else{

	do{

		codice = trovaSuccessivo(codice);

	}
	while(!controllaValidita(codice) && codice[0] != "0"){}

	if(codice[0] != "0")
		stampaArray(codice);
	else
		console.log("No successor");

}

}




function controllaValidita ( cod: string[] ) : boolean{

	let a : number = 0;
	let b : number = 0;
	let c : number = 0;

	if(cod.length != 6)
		return false;
	else{

		for( let i = 0 ; i < 6 ; i++){

			if(cod[i] == "a")
				a++;
			else if(cod[i] == "b")
				b++;
			else if(cod[i] == "c")
				c++;
			else
				return false;

		}

	}

	if(a != 3 || b != 2 || c != 1)
		return false;

	return true;

}

function trovaSuccessivo (n: string[]) : string[]{

	if(n[5] != "c"){

		if(n[5] == "a")
			n[5] = "b";
		else
			n[5] = "c";

	}
	else if(n[4] != "c"){

		n[5] = "a";

		if(n[4] == "a")
			n[4] = "b";
		else
			n[4] = "c";

	}
	else if(n[3] != "c"){

		n[5] = "a";
		n[4] = "a";

		if(n[3] == "a")
			n[3] = "b";
		else
			n[3] = "c";

	}
	else if(n[2] != "c"){

		n[5] = "a";
		n[4] = "a";
		n[3] = "a";

		if(n[2] == "a")
			n[2] = "b";
		else
			n[2] = "c";

	}
	else if(n[1] != "c"){

		n[5] = "a";
		n[4] = "a";
		n[3] = "a";
		n[2] = "a";

		if(n[1] == "a")
			n[1] = "b";
		else
			n[1] = "c";

	}
	else if(n[0] != "c"){

		n[5] = "a";
		n[4] = "a";
		n[3] = "a";
		n[2] = "a";
		n[1] = "a";

		if(n[0] == "a")
			n[0] = "b";
		else
			n[0] = "c";

	}
	else{

		n[0] = "0";

	}

	return n;

}

function riempiArray () : string[]{

	let A : string[] = []; 

	let i : string = "0";

	A[0] = inputString("Inserisci un codice.");

	while(i != "#"){

		if((i=inputString("Inserisci un codice. (# per terminare)")) != "#")
			A.push(i);

	}

	return A;

}

function inputString (frase:string) : string{

	let n : string = prompt(frase);

	return n;

}

function stampaArray (A:string[]) : void{

	let stampa : string = "";

	stampa+= A[0];

	for( let i = 1; i < A.length ; i++ ){

		stampa = stampa + A[i];

	}

	console.log(stampa);

} 