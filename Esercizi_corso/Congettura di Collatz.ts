function problems(i:number,j:number):number{

    let lunghezzaMassima:number= 0
    let arrayNum:number[] = []
    

    while(i<=j){

        let n:number=i
        arrayNum.push(n)

        while (n != 1){

            if (n%2 == 0){
                n = n/2;
                arrayNum.push(n)
            }else{
                n = n*3 +1
                arrayNum.push(n)
            }
        }
        if (arrayNum.length>lunghezzaMassima){
            lunghezzaMassima=arrayNum.length
            //console.log(arrayNum)
        }
        i++
        arrayNum=[]
    }
    return(lunghezzaMassima) 
}   

    

let i:number=parseInt(prompt("numero"))
let j:number=parseInt(prompt("numero"))

console.log(i , j , problems(i,j))
