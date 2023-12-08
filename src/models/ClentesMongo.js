import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  amigos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pessoa'
    }
  ]
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

export default Pessoa;
