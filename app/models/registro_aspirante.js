'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class registro_aspirante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registro_aspirante.init({
    nombre_s: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'El nombre solo puede contener letras'
        }
      }
    },
    primer_apellido: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sexo: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    entidad_federativa_nacimiento: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    municipio_nacimiento: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(40),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'El email debe ser un correo válido'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: 'La contraseña debe tener al menos 6 caracteres'
        }
      }
    },
    pregunta_secreta: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    respuesta_pregunta: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    n_control: {
      type: DataTypes.STRING(9),
      unique: true,
      allowNull: false
    },
    estatus: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'registro_aspirante',
  });
  return registro_aspirante;
};