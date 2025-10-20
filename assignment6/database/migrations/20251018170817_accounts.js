/**
 * This file is designed to be migrated into the PostgreSQl database to build out the Schema for the accounts table.
 * The accounts table will hold the different types of accounts such as admin, merchant, standard
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *
 * the exports.up is a function knex runs to apply the database schema changes with knex migrate:latest is ran
 **/
exports.up = function (knex) {
  return knex.schema.createTable("accounts", (table) => {
    table.increments("id").primary();
    table.string("account_type").notNullable().unique();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *
 * export.down is a function that undoes the changes of export.up in the below example it drops the table.
 * */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("accounts");
};
