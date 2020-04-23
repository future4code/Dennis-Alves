const fs = require('fs');
const fileName = process.argv[2]
const data = process.argv[3]+ " " +process.argv[4]

try{
    if(!fs.existsSync(fileName)){
      try{
          fs.writeFileSync(`./${fileName}`, data,'utf-8');
          console.log("arquivo criado com sucesso e tarefa adicionada!")
      } catch (e) {console.log(e)}
    }
    else{
        let newData = `\n${data}`
        try {
            fs.appendFileSync(`./${fileName}`, newData,'utf-8')
            console.log("tarefa adicionada com sucesso")
        }catch(e){console.log(e)}
    }
}catch (e) {
    console.log(e)
}