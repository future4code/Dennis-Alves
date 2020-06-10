function ex2A(stringSent: string){
    const result = {
        stringSize: 0,
        stringFirst: "",
        stringLast: ""
    }

    result.stringSize = stringSent.length
    result.stringFirst = stringSent.charAt(0)
    result.stringLast = stringSent.charAt(result.stringSize - 1)

    return result
}

function ex2B(stringSent: string){

    const newArray = {
        splitString: stringSent.split(""),
    }


    return newArray
}