/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      item_name: "Frisbee",
      item_description: `Round disc designed for throwing`,
      item_price: 19.99,
      views_count: 234,
      returns_count: 3,
      sold_count: 78,
      inventory_count: 430,
      item_owner: 1,
    },
    {
      item_name: "Yo-yo",
      item_description: `Small toy attached to a string that with the correct motion extends away and comes back by winding and unwinding the string`,
      item_price: 9.99,
      views_count: 643,
      returns_count: 34,
      sold_count: 88,
      inventory_count: 148,
      item_owner: 2,
    },
  ]);
};
