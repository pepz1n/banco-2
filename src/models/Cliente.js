// compra.mjs
import { DataTypes } from 'sequelize';
import Sequelize from '../config/';

const Cliente = Sequelize.define('clientes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(500)
  },
  cidade: {
    type: DataTypes.STRING(100)
  },
  uf: {
    type: DataTypes.STRING(2)
  },
  email: {
    type: DataTypes.STRING(500),
    allowNull: false,
    unique: true
  }
},
{
  freezeTableName: true,
  timestamps: false
}
);

export default Cliente;
