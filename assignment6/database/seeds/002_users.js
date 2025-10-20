/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *
 * This file provides initial seed data for the database once the tables are built it provides data that can be fetched and manipulated for testing the application
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Richard",
      last_name: "Huffman",
      username: "rhuffman",
      email: "richard.huffman@du.edu",
      password: "12qwaszx!@QWASZX",
      account_type: 1,
    },
    {
      first_name: "Jeff",
      last_name: "Bezos",
      username: "jbezos",
      email: "jbezos@fakeuser.net",
      password: "12qwaszx!@QWASZX",
      account_type: 3,
    },
  ]);
};
