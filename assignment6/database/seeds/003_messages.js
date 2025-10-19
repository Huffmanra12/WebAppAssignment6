/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("site_messages").del();
  await knex("site_messages").insert([
    {
      key: "Welcome Message",
      content: `Welcome to Huffman Marketplace — a modern, all-in-one web platform designed to simplify the way merchants manage their online business. This application serves as a central hub where you can handle every aspect of your store’s operations, from adding and editing products to tracking performance metrics and gaining valuable insights into your business activity.

The goal of Huffman Marketplace is to make store management intuitive, efficient, and accessible to everyone. Instead of juggling multiple tools or spreadsheets, this platform brings everything together in a single, easy-to-navigate interface. Whether you’re a small business owner, a reseller, or simply exploring how digital commerce management systems work, this app gives you a clear and organized environment to work in.

Using the menu on the left, you can access different sections of the system. The Add Item page allows you to create and customize new product listings, complete with names, descriptions, and pricing. The All Items section displays your entire product catalog, giving you quick access to edit or remove existing listings. The Metrics page provides analytical data and performance indicators, helping you understand sales trends, identify popular products, and make informed business decisions.

This demo showcases how a full-stack web application can combine functionality and modern design using React, Tailwind CSS, and Flowbite. The layout emphasizes usability, responsive design, and a clean, professional aesthetic suitable for both merchants and developers who want to understand how a commerce dashboard operates.

Whether you’re testing features, learning web development, or imagining how this concept could scale into a live e-commerce management solution, Huffman Marketplace offers a clear demonstration of how simplicity and performance can work together to enhance the merchant experience.

Thank you for visiting — explore the features, experiment with the tools, and enjoy your time exploring Huffman Marketplace.`,
      created_by: 1,
    },
  ]);
};
