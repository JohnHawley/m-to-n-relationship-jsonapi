const { env: { PWD, PORT } } = process;
const { Application, config, database } = require('./bundle');

module.exports = new Application(
  Object.assign(config, {
    database,
    path: PWD,
    port: PORT
  })
);
