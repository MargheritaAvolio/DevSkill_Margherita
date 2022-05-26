let numeroBrutto : number = 0;
let i : number = 0;


while(numeroBrutto != 1500 ){
	i++;
	if(eBrutto(i))
		numeroBrutto++;

}

function eBrutto(n: number) : boolean{
	let ugly : boolean = true;

	while(  n != 1 ){
		if( n%2==0 )
			n = n/2;
		else if( n%3==0 )
			n = n/3;
		else if( n%5==0 )
			n = n/5;
		else{
			n = 1;
			ugly = false;
		}
	}
	return ugly;
} 


console.log("Il 1500' numero brutto è " + i);