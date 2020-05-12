import dotenv from "dotenv";
import knex from "knex";
import {AddressInfo} from "net";
import express, {Request, Response} from "express";


dotenv.config();

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

const createUserTable = async (): Promise<void> => {
    await connection.raw(`
    CREATE TABLE TodoListUser (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);
 `)
}

const createTodoListTaskTable = async (): Promise<void> => {
    await connection.raw(`
    CREATE TABLE TodoListTask (
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);
 `)
}
const createTodoListResponsibleUserTaskRelationTable = async (): Promise<void> => {
    await connection.raw(`
   CREATE TABLE TodoListResponsibleUserTaskRelation (
    task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);
 `)
}
const makeId = (length: number) => {

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const createUser = async (
    name: string,
    nickName: string,
    email: string,
): Promise<boolean> => {
    if (name === "" || nickName === "" || email === "") {
        return false
    } else {
        const id = makeId(12)
        await connection.raw(`
           INSERT INTO TodoListUser (id,name,nickname,email)
           VALUES ("${id}","${name}","${nickName}","${email}");
        `)
        return true
    }
}

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE id = '${id}'
  `)
    const user = result[0][0]
    return user

}

const updateUser = async (
    id: string,
    name: string,
    nickName: string,
): Promise<boolean> => {
    if (name === "" || nickName === "" || id === "") {
        return false
    } else {

        await connection.raw(`
           UPDATE TodoListUser 
           SET name = "${name}",nickname="${nickName}"
           WHERE id="${id}"
        `)
        return true
    }
}
const createTask = async (
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string,
):Promise<boolean> => {
    if (title === "" || description === "" || limitDate === "" || creatorUserId === "") {
        return false
    } else {
        const date = limitDate;
        const newdate = date.split("/").reverse().join("-");
        const id = makeId(12)

        await connection.raw(`
           INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
           VALUES  ("${id}","${title}","${description}","${newdate}","${creatorUserId}");
        `)
        return true
    }
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListTask WHERE id = '${id}'
  `)
    const task = result[0][0]
    return task

}
async function main(): Promise<void> {

    app.put("/user", async (req: Request, res: Response) => {
        try {

            const validator = await createUser(
                req.body.name,
                req.body.nickName,
                req.body.email
            );
            if (validator) {
                res.status(200).send();
            } else {
                res.status(412).send({
                    message: "O formulario está incompleto",
                });
            }
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });
    app.get("/user/:id", async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await getUserById(id);

            if (id !== "") {
                if (user) {
                    delete user.name;
                    delete user.email;
                    res.status(200).send(user)
                } else {
                    res.status(404).send({
                        message: "O formulario não existe",
                    });
                }

            } else {
                res.status(412).send({
                    message: "O formulario está incompleto",
                });
            }
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });

    app.post("/user/edit", async (req: Request, res: Response) => {
        try {
            const validator = await updateUser(
                req.query.id as string,
                req.body.name,
                req.body.nickname,
            )
            if (validator) {
                res.status(200).send();
            } else {
                res.status(412).send({
                    message: "O formulario está incompleto",
                });
            }
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });

    app.put("/task", async (req: Request, res: Response) => {
        try {

            const validator = await createTask(
                req.body.title,
                req.body.description,
                req.body.limitDate,
                req.body.creatorUserId
            );
            if (validator) {
                res.status(200).send();
            } else {
                res.status(412).send({
                    message: "O formulario está incompleto",
                });
            }
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });

    app.get("/task/:id", async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const task = await getTaskById(id);

            if (id !== "") {
                if (task) {
                    const date = task.limit_date.toISOString().substring(0, 10) + ""
                    const newdate = date.split("-").reverse().join("/")
                    task.limit_date = newdate;
                    res.status(200).send(task)
                } else {
                    res.status(404).send({
                        message: "O formulario não existe",
                    });
                }

            } else {
                res.status(412).send({
                    message: "O formulario está incompleto",
                });
            }
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });

}

const app = express();
​
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server")
    }
})

main();
