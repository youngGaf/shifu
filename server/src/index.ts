import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


dotenv.config();

if(!process.env.PORT){
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

/* Configuration */
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

/* Server Activation */
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})
