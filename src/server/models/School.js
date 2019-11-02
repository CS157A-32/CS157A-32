const Sequelize = require("sequelize");
const db = require("../db/db");
module.exports = db.Sequelize.define(
    "school",
    {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
          },
        conference: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
          },
          attendance: {
              type: Sequelize.INTEGER,
          },
          tuition: {
              type: Sequelize.INTEGER,
          },
          mascot: {
              type: Sequelize.STRING,
          }
    },
    {
        timestamps: false
    }
);
