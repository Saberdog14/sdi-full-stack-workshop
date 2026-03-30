// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "placeholder data",
      port: 5432,
      user: "placeholder data",
      password: "placeholder data",
      database: "baked_potatos",
    },
  },
};
