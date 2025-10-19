/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
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
