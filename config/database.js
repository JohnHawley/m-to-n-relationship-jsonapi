export default {
  development: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_prod'
  }
};
