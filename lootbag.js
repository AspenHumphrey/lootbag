"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('company.sqlite', (err) => {
});

// const addToy = () => {
//     console.log('add a toy!');
// };

module.exports.addToy = () => {};