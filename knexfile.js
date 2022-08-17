/** @format */

const pkg = require('./package.json');
const path = require('path');
const databaseName =
  pkg.name + (process.env.NODE_ENV === 'lendsqr' ? '-lendsqr' : '');
const user = 'root';
const password = '123456';

module.exports = {
  development: {
    client: 'mysql2',
    // connection: `mysql2://localhost:5432/${databaseName} ${user} ${password}`,
    connection: {
      database: 'lendsqr',
      user: 'root',
      password: '123456',
    },
    migrations: {
      directory: path.join(__dirname, './models/migrations'),
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      database: 'lendsqr',
      user: 'root',
      password: '123456',
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.join(__dirname, './models/migrations'),
    },
  },
};
