/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_messages", (table) => {
    table.increments("id").primary();
    table.string("key").notNullable().unique();
    table.text("content").notNullable();
    table
      .integer("created_by")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("update_at").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('site_messages', table => {
    table.dropForeign('created_by');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('site_messages')
  })
};
