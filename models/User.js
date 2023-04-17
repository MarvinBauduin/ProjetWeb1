const db = require('../models/db_conf');

module.exports.save = (data) => {
    console.log(data);
    const stmt = db.prepare('INSERT INTO users(name, firstname, email, password) VALUES (?, ?, ?, ?)');
    const info = stmt.run(data.userLastname, data.userFirstname, data.userEmail, data.userPassword);
    console.log("user model save member" + info.changes);
}