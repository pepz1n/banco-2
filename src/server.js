import Express  from "express";
import 'dotenv/config';
import Routes from "./routes";
import mongo from "./config/mongo.js";

mongo.on("error", console.log.bind(console, 'Erro de Conexao'));
mongo.once("open", () => console.log("Conectou com o banco"));

const app = Express();

app.use(Express.json({ limit: '50mb' }));
app.use(Express.urlencoded({ extended: true, limit: '50mb' }));

Routes(app);

app.use(async (req, res) => {
  res.status(404).send('404 - Página não encontrada');
});

app.listen(process.env.API_PORT, async () => {
  console.log(`ABEX API running in ${process.env.API_PORT}`);
});
