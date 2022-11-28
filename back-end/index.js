import App from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const { PORT = 5000 } = process.env;

new App(PORT);
