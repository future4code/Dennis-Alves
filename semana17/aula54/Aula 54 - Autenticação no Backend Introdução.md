### Exercício 1
a)usar strings aumenta a quantidade de caracteres para gerar o `id`
b)
```Ts
import { v4 } from "uuid"

const id = v4();
export class CreateId{
    public create(id: string){
        return v4();
    }
}
```
### Exercício 2
a)`const userTableName = "User";` aqui definimos o nome da table que será usada
```Ts
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});
```
esse trecho se refere ao dados para conexão com a DB
```Ts
const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
essa parte envia o comando de criar usuario para a DB através de uma query builder
b)
```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```Ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {CreateId} from "./services/CreateId";
import {DataBase} from "./data/DataBase";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
async function main(): Promise<void> {
  const createId = new CreateId();
  const dataBase = new DataBase();

  dataBase.createUser(createId.create("huehue"),"teste","testepass")
}
main();
```
d)
```Sql
# id, email, password
'9409e399-82b1-416f-9b76-a9e007825435', 'teste', 'testepass'

```

### Exercício 3
a) `as string` define a resposta para o tipo `string`, como diz o Goli "para o typeScript não encher o saco".
b)
```Ts
import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }
}

interface AuthenticationData {
  id: string;
}
```

### Exercício 4
a)
```Ts
app.post("/signup", async (req: Request, res: Response) => {

        try {
            const data = {
                email: req.body.email,
                password: req.body.password,
            }

            const createId = new CreateId();
            const id = createId.create();

            const db = new DataBase();
            await db.createUser(id, data.email, data.password)

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```

b)
```Ts
app.post("/signup", async (req: Request, res: Response) => {

        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            const data = {
                email: req.body.email,
                password: req.body.password,
            }

            const createId = new CreateId();
            const id = createId.create();

            const db = new DataBase();
            await db.createUser(id, data.email, data.password)

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```

c)
```Ts
app.post("/signup", async (req: Request, res: Response) => {

        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            const data = {
                email: req.body.email,
                password: req.body.password,
            }

            const createId = new CreateId();
            const id = createId.create();

            const db = new DataBase();
            await db.createUser(id, data.email, data.password)

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 5
a)
```Ts
app.get("/user/:email", async (req: Request, res: Response) => {

        try {
            
            const email = req.params.email;
            const db = new DataBase();
            const user = await db.getUserByEmail(email);

            res.status(200).send(user)
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
b) Tudo ok

### Exercício 6
```Ts
app.post("/login", async (req: Request, res: Response) => {

        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            const data = {
                email: req.body.email,
                password: req.body.password,
            }
            const db = new DataBase();
            const user = await db.getUserByEmail(data.email);

            if (user.password !== data.password) {
                throw new Error("Invalid password");
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id: user.id,
            });
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 7
a) `as any` diz que pode ser qualquer coisa, o resultado pode ser de qualquer tipo então precisamos avisas ao ts isso
b)
```Ts
import * as jwt from "jsonwebtoken";

export class Authenticator {
    private static EXPIRES_IN = "1min";
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: input.id,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN,
            }
        );
        return token;
    }
    public getData(token: string): AuthenticationData{
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    };
}

interface AuthenticationData {
    id: string;
}
```

### Exercício 8
a)
```Ts
public async getUserById (
        id: string
    ): Promise<any>{
        const result = await this.connection
            .select("*")
            .from(DataBase.TABLE_NAME)
            .where({id});
        return result[0]
    }
```
b)
```Ts
app.get("/user/profile", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            const userDb = new DataBase();
            const user = await userDb.getUserById(authenticationData.id);

            res.status(200).send({
                id: user.id,
                email: user.email,
            });
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```