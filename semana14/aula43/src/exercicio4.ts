export function exercicio4(year: number,type: string):void {
    let result: string = undefined;
    let formatedYear: number = undefined

    if(year >= 0 &&(type.toLowerCase() === "ac" || type.toLowerCase() === "dc" || type.toLowerCase() === "")){
        if(type.toLowerCase() === "ac"){
            formatedYear = year * (-1)
        }
        else if(type.toLowerCase() === "dc" || type.toLowerCase() === ""){
            formatedYear = year
        }

        if(formatedYear < -4000 ){
            result = "o ano "+ year + " " + type.toLocaleUpperCase() +" pertence a Pré-história"
        }
        else if(formatedYear >= -4000 && formatedYear <476){
            result = "o ano "+ year + " " + type.toLocaleUpperCase() +" pertence a Idade Antiga"
        }
        else if(formatedYear >= 476 && formatedYear <1453 ){
            result = "o ano "+ year + " " + type.toLocaleUpperCase() +" pertence a Idade Média"
        }
        else if(formatedYear >= 1453 && formatedYear <1789 ){
            result = "o ano "+ year + " " + type.toLocaleUpperCase() +" pertence a Idade Moderna"
        }
        else if(formatedYear >= 1789 ){
            result = "o ano "+ year + " " + type.toLocaleUpperCase() +" pertence a Idade Contemporânea"
        }
    }
    else if(year<=0){
        if(type.toLowerCase() === "ac" || type.toLowerCase() === "dc" || type.toLowerCase() === ""){
            result = "ano invalido!"
        }
        else{
            result = "ano e tipo invalido!"
        }

    }
    else if(type.toLowerCase() !== "ac" || type.toLowerCase() !== "dc" || type.toLowerCase() !== ""){
        result = "tipo invalido!"
    }
    console.log("Exercicio 4")
    console.log(result)
}