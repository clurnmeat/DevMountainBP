require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// simulate logged in user
const user_id = 4;
const client_id = 3;

module.exports = {
  getUserInfo: (req, res) => {
    sequelize.query(`
    SELECT * 
    FROM cc_clients c 
    JOIN cc_users u 
    ON c.user_id = u.user_id
    WHERE user_id = ${user_id}`
    ).then(dBres => res.status(200).send(dBres[0])).catch(err => console.log(err))
  },
  udpateUserInfo: (req, res) => {},
  getUserAppointment: (req, res) => {},
  requestAppointment: (req, res) => {},
};
