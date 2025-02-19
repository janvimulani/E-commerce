import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });
import { hostname } from 'os';


const hostName: string = '127.0.0.1';
const port: string | number | undefined = process.env.PORT || 9900;
const dbUrl: any = process.env.MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.MONGO_DB_DATABASE;

const app: Application = express();
app.use(express.json())

app.get("/", (request: Request, response: Response) => {
    response.status(200);
    response.json({
        msg: "welcome to Express server"
    });
});


if (port) {
    app.listen(Number(port), hostName, () => {
        if (dbUrl && dbName) {
            mongoose
                .connect(dbUrl, { dbName: dbName })
                .then(() => { console.log("Database Connection is reddyy...") })
                .catch((error) => {
                    console
                    
                    .error("Database Not Connected...")
                    process.exit(0)  //Force stop express server
                })
        }
        console.log(`Express Server is started at http://${hostName}:${port}`);
    });
}
                