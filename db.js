/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly");
//const db = new pg.Client("postgresql://username:your-password@localhost/lunchly");



db.connect();

module.exports = db;
