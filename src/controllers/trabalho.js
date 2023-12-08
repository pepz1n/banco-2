import Compra from "../models/Compras";
import Pessoa from '../models/ClentesMongo'
import Cliente from "../models/Cliente";

const compra = async (req, res) => {
  try {
    const response = await Compra.create(req.body.compra);
    const responseMongo = new Pessoa(req.body.amigo);
    responseMongo.save();

    const pessoaComprador = await Cliente.findOne({
      where: {
        id: req.body.compra.id_cliente
      }
    })

    const re = await Pessoa.findOneAndUpdate(
      { cpf: pessoaComprador.cpf },
      { $addToSet: { amigos: responseMongo._id } },
      { new: true }
    ).exec()

    const objetoDoRedis = {
      nomeAmigoCliente: req.body.amigo.nome,
      nomeAmigoCliente: pessoaComprador.nome,
      compraCliente: req.body.compra.produto,
      valorCompraCliente: req.body.compra.valor
    }
    return res.status(200).send({
      message: 'objetoDoRedis'
    })
  } catch (error) {
    return res.status(200).send({
      message: error.message
    })
  }
}


const insert = async (req, res) => {
  try {
    const PessoasData = [
      { nome: 'João Silva', cpf: '12345678901', email: 'joao.silva@email.com' },
      { nome: 'Maria Oliveira', cpf: '98765432109', email: 'maria.oliveira@email.com' },
      { nome: 'Carlos Santos', cpf: '45678901234', email: 'carlos.santos@email.com' },
      { nome: 'Ana Pereira', cpf: '78901234567', email: 'ana.pereira@email.com' },
      { nome: 'Pedro Souza', cpf: '23456789012', email: 'pedro.souza@email.com' }
    ];

    PessoasData.forEach(data => {
      let pessoas = new Pessoa(data);

      pessoas.save((err) => {
        if (err) {
          console.error(`${err.message} - falha ao cadastrar pessoas`);
        } else {
          console.log(`pessoas cadastrado: ${pessoas.toJSON()}`);
        }
      });
    });

  } catch (error) {
    return res.status(200).send({
      message: error.message
    })
  }
}

export default {
  insert,
  compra
}
