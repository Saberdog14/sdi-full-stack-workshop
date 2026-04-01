/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("baked_potato").del();
  await knex("baked_potato").insert([
    {
      name: "Classic",
      ingredients: "Potato, Chili, Sour Cream, Chives, Cheese",
    },
    {
      name: "South Western",
      ingredients: "Potato, Green Chili, Jalapenos, Cotija Cheese",
    },
    {
      name: "Philly",
      ingredients: "Potato, Chopped Steak, Bechamel, Horse Radish",
    },
  ]);
};
