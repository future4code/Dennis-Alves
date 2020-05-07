### Exercício 1
a) usando o raw temos uma array com a resposta da requisição feita ao banco de dado on o primeiro item é as informações da tabela e o restante são informaçoes da requisição que geralmente não são usada.
b)
```Ts
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
 `)
    return result[0][0]
}
```
### Exercício 2
a)
```Ts
const updateSalaryActor = async (
    id: string,
    salary: number,
):Promise<void> => {
    await connection.update({salary: salary}).where("id","=",id).from("Actor")
};
```
b)
```Ts
const deleteActor = async (
    id: string,
):Promise<void> => {
    await connection.delete().where("id","=",id).from("Actor")
}
```
### Exercício 3
a) a leitura do `id` é feita dessa forma para o parametro ser pego direto da url
b) a linha do try `(res.status(200).send(actor))` serve apra retornar a menssagem de status `200` e retornar o conteudo de `actor`, e a linha do cathc `(res.status(400).send({...} )` server para retornar a menssagem de erro com o status `400`
c)
```Ts
app.get("/actor", async (req: Request, res: Response) => {
        try {
            const count = await countActorByGender(req.query.gender as string);
            res.status(200).send({quantity: count,});
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 4
a)
```Ts
app.post("/actor", async (req: Request, res: Response) => {
        try {
            await updateSalaryActor(
                req.body.id,
                req.body.salary,
            )

            res.status(200).send();
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
b)
```ts
app.delete("/actor/:id", async (req: Request, res: Response) => {
        try {
            await deleteActor(
                req.params.id
            )

            res.status(200).send();
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 5
```Ts
const criarFilme = async (
    id: string,
    nome: string,
    sinopse: number,
    dataDelancamento: Date,
    avaliacao: number
): Promise<void> => {

    await connection
        .insert({
            id: id,
            nome: nome,
            sinopse: sinopse,
            data_de_lançamento: dataDelancamento,
            avaliação: avaliacao,
        })
        .into("Filmes");
};

    app.post("/movie", async (req: Request, res: Response) => {
        try {
            await criarFilme(
                req.body.id,
                req.body.nome,
                req.body.sinopse,
                new Date(req.body.dataDeLancamento),
                req.body.avaliacao
            );

            res.status(200).send();
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 6
```Ts
const pegarTodosFilmes = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Filmes LIMIT 15
    `)
    return result[0]
}
    app.get("/movie/all", async (req: Request, res: Response) => {
        try {
            const result = await pegarTodosFilmes();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 7
```ts
const filtrarPorNomeOuSinopse = async (
    termo: string,
): Promise<any> => {
    const result = await connection.raw(`
       SELECT * FROM Filmes WHERE (nome LIKE "%${termo}%" OR sinopse LIKE "%${termo}%") 
       ORDER BY data_de_lançamento
    `)
    return result[0]

}

    app.get("/movie/all", async (req: Request, res: Response) => {
        try {
            const result = await filtrarPorNomeOuSinopse(req.query.termo as string);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
