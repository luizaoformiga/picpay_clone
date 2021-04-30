import "reflect-metadata";
import { createConnection } from "typeorm";
import app from './app';

const port = process.env.PORT || 6000;

createConnection();

app.listen(port, () => console.log(port));
