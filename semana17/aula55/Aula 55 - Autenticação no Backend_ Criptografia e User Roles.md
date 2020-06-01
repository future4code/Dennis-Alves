### Exercício 1
a) `round` é a quantidade de vezes que será executado o algoritimo de criptografia, `salt` é uma string que será gerada aleatoriamente e será colocado no hash, eu usei 12 porque o goli falou quer seria melhor para estudo
b)
```TS
import * as bcrypt from "bcryptjs";

export class HashManager{
    public  async hash(s: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        console.log("encrypted message: ", result);
        return result
    }
    public async compare(s: string, hash: string): Promise<boolean> {
        return bcrypt.compare(s, hash)
    }
}
```

### Exercício 2
a) primeiro modificamos o cadastro pois precisamos implementar o uso da criação do hash.
b)
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
            await db.createUser(id, data.email, await new HashManager().hash(data.password));

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
```
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

            if (!await new HashManager().compare(data.password,user.password)) {
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
c) não precisa modificações pois o user deve estar autenticado para ter acesso ao token

### Exercício 3
a)`ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal"`
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
            role: payload.role
        };
        return result;
    };
}

interface AuthenticationData {
    id: string;
    role: string;
}
```
c)
```TS
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
            await db.createUser(id, data.email, await new HashManager().hash(data.password));
            const user = await db.getUserByEmail(data.email);
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id,role: user.role})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
d)
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

            if (!await new HashManager().compare(data.password,user.password)) {
                throw new Error("Invalid password");
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id: user.id,
                role: user.role,
            });
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 4
```Ts
app.get("/user/profile", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if(authenticationData.role !== "normal"){
                throw new Error("Unauthorized ");
            }

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
### Exercício 5
```Ts
public async deleteUserById (
        id: string,
    ) :Promise<void>{
        await this.connection
            .delete()
            .from(DataBase.TABLE_NAME)
            .where({id});
    }
    
    app.delete("/user/:id", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id
            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if (authenticationData.role !== "admin") {
                throw new Error("Unauthorized ");
            }

            const userDb = new DataBase();
            await userDb.deleteUserById(id);

            res.status(200).send({
                message: "usuario deletado"
            });
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```

### Exercício 6

```Ts
app.get("/user/:id", async (req: Request, res: Response) => {

        try {

            const token = req.headers.authorization as string;
            const id = req.params.id
            const authenticator = new Authenticator();
            authenticator.getData(token);

            const userDb = await new DataBase().getUserById(id)


            res.status(200).send({
                id: userDb.id,
                email: userDb.email,
            })
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
```
### Exercício 7
a)
```Ts
import knex from "knex";
import Knex from "knex";

export abstract class BaseDataBase {
    private static connection: Knex | null = null;

    protected getConnection(): Knex {
        if (BaseDataBase.connection === null) {
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            });
        }
        return BaseDataBase.connection;
    }

    public static async destroyConnection(): Promise<void> {
        if (BaseDataBase.connection) {
            await BaseDataBase.connection.destroy();
            BaseDataBase.connection = null;
        }
    }
}

import dotenv from "dotenv";
import {BaseDataBase} from "./BaseDataBase";

dotenv.config();

export class DataBase extends BaseDataBase{
    private static TABLE_NAME = "User";


    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                id,
                email,
                password,
            })
            .into(DataBase.TABLE_NAME);
    }
    public async getUserByEmail (
        email: string
    ): Promise<any>{
       const result = await this.getConnection()
            .select("*")
            .from(DataBase.TABLE_NAME)
            .where({email});
        return result[0]
    }
    public async getUserById (
        id: string
    ): Promise<any>{
        const result = await this.getConnection()
            .select("*")
            .from(DataBase.TABLE_NAME)
            .where({id});
        return result[0]
    }
    public async deleteUserById (
        id: string,
    ) :Promise<void>{
        await this.getConnection()
            .delete()
            .from(DataBase.TABLE_NAME)
            .where({id});
    }
}
```

b)
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
            await db.createUser(id, data.email, await new HashManager().hash(data.password));
            const user = await db.getUserByEmail(data.email);
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({id, role: user.role})
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
        await BaseDataBase.destroyConnection();
    });
    app.get("/user/:id", async (req: Request, res: Response) => {

        try {

            const token = req.headers.authorization as string;
            const id = req.params.id
            const authenticator = new Authenticator();
            authenticator.getData(token);

            const userDb = await new DataBase().getUserById(id)


            res.status(200).send({
                id: userDb.id,
                email: userDb.email,
            })
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
        await BaseDataBase.destroyConnection();
    });

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

            if (!await new HashManager().compare(data.password, user.password)) {
                throw new Error("Invalid password");
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({
                id: user.id,
                role: user.role,
            });
            res.status(200).send({token})
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
        await BaseDataBase.destroyConnection();
    });
    app.get("/user/profile", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if (authenticationData.role !== "normal") {
                throw new Error("Unauthorized ");
            }

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
        await BaseDataBase.destroyConnection();
    });

    app.delete("/user/:id", async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id
            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            if (authenticationData.role !== "admin") {
                throw new Error("Unauthorized ");
            }

            const userDb = new DataBase();
            await userDb.deleteUserById(id);

            res.status(200).send({
                message: "usuario deletado"
            });
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
        await BaseDataBase.destroyConnection();
    });
}
```
