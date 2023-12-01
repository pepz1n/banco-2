import Express  from "express";
import 'dotenv/config';
import Routes from "./routes";

const app = Express();

app.use(Express.json({ limit: '50mb' }));
app.use(Express.urlencoded({ extended: true, limit: '50mb' }));

Routes(app);

app.use((req, res) => {
  res.status(404).send('404 - Página não encontrada');
});

app.listen(process.env.API_PORT, () => {
  console.log(`ABEX API running in ${process.env.API_PORT}`);
});
