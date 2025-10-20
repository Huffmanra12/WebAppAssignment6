/**
 * This file is designed to be migrated into the PostgreSQl database to build out the Schema for the accounts table.
 * The accounts table will hold the different types of accounts such as admin, merchant, standard
 *
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 * the exports.up is a function knex runs to apply the database schema changes with knex migrate:latest is ran
 **/
exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments().primary();
    table.string("item_name").notNullable();
    table.text("item_description").notNullable();
    table.decimal("item_price", 10, 2).notNullable();
    table.integer("views_count", 3).notNullable().defaultTo(0);
    table.integer("returns_count", 3).notNullable().defaultTo(0);
    table.integer("sold_count", 3).notNullable().defaultTo(0);
    table.integer("inventory_count", 3);
    table
      .integer("item_owner")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 * export.down is a function that undoes the changes of export.up in the below example it drops the table.
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("items", (table) => {
      table.dropForeign("item_owner");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("items");
    });
};
