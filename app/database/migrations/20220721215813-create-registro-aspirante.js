'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registro_aspirantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_s: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      primer_apellido: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      segundo_apellido: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      fecha_nacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      sexo: {
        type: Sequelize.INTEGER(1)
      },
      entidad_federativa_nacimiento: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      municipio_nacimiento: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(40),
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pregunta_secreta: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      respuesta_pregunta: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      n_control: {
        type: Sequelize.STRING(40),
        unique: true,
        allowNull: false
      },
      estatus: {
        type: Sequelize.INTEGER(1),
        allowNull: false
      },
      fecha_registro: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registro_aspirantes');
  }
};