/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 * 
 * This file provides initial seed data for the database once the tables are built it provides data that can be fetched and manipulated for testing the application
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("accounts").del();
  await knex("accounts").insert([
    {
      account_type: "Admin",
    },
    {
      account_type: "Standard",
    },
    {
      account_type: "Merchant",
    },
  ]);
};
