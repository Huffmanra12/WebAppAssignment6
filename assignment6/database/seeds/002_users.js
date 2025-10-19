/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
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
