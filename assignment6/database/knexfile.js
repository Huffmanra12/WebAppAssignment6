require("dotenv").config();

const { DB_HOST, PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const host = DB_HOST || PGHOST || "127.0.0.1";

const base = {
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE || "merchant_app",
    user: PGUSER || "merchant_user",
    password: PGPASSWORD,
  },
  pool: { min: 2, max: 10 },
  migrations: { directory: "./migrations", tableName: "knex_migrations" },
  seeds: { directory: "./seeds" },
};

module.exports = {
  development: base,
  production: base,
  test: {
    ...base,
    connection: { ...base.connection, database: `${base.database}_test` },
  },
};
