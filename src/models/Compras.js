// compra.mjs
import { DataTypes } from 'sequelize';
import Sequelize from '../config/';
import Cliente from './cliente.js';

const Compra = Sequelize.define('Compra', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  }
});

export default Compra;
