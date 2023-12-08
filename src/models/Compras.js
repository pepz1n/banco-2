// compra.mjs
import { DataTypes } from 'sequelize';
import Sequelize from '../config/';
import Cliente from './Cliente.js';

const Compra = Sequelize.define('compras', {
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
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
},
  {
    freezeTableName: true,
    timestamps: false
  }

);

export default Compra;
