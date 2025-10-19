/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table
      .integer("account_type")
      .notNullable()
      .references("id")
      .inTable("accounts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('users', table => {
    table.dropForeign('account_type');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('users')
  })
};
