import express from "express";
import dotenv from "dotenv";
import {AddressInfo} from "net";
import {userListenerRouter} from "./routes/UserListenerRouter";
import {adminRouter} from "./routes/AdminRouter";
import {bandRouter} from "./routes/BandRouter";
import {genreRouter} from "./routes/GenreRouter";




dotenv.config();
const app = express();
app.use(express.json());

async function main() {
    app.use("/users", userListenerRouter)
    app.use("/admin", adminRouter)
    app.use("/band", bandRouter)
    app.use("/genre", genreRouter)
}

main()

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
