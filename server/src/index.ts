import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/not-found.middleware";
import { connect, disconnect } from "./models/db/database.connection.";


dotenv.config();

if(!process.env.PORT){
    disconnect();
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

/* Configuration */
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Routing
 */
 app.use("/api/menu/items", itemsRouter);

/**
 * Error handling
 */
app.use(errorHandler);
app.use(notFoundHandler);


/* Server Activation */
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
    connect();
})
