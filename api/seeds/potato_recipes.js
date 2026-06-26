/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("potato_recipes").del();

  await knex("potato_recipes").insert([
    {
      baked_potato_id: 1,
      ingredients: "Potato, Chili, Sour Cream, Chives, Cheese",
      instructions:
        "Bake potato in foil at 400°F for 45 minutes. Slather chili on top, followed by sour cream, chives, and cheese of choice.",
    },
    {
      baked_potato_id: 2,
      ingredients: "Potato, Green Chili, Jalapeños, Cotija Cheese",
      instructions:
        "Bake potato in foil at 400°F for 45 minutes. Slather green chili on top, followed by jalapeño slices and cotija cheese crumbles.",
    },
    {
      baked_potato_id: 3,
      ingredients: "Potato, Chopped Steak, Béchamel, Horseradish",
      instructions:
        "Bake potato in foil at 400°F for 45 minutes. Add a dollop of horseradish, followed by chopped steak and a ladleful of béchamel cheese sauce.",
    },
  ]);
};
