import trabalho from "../controllers/trabalho"

export default (app) => {
  app.get('/criar-banco', trabalho.insert);
  app.post('/rodar', trabalho.compra)
}
