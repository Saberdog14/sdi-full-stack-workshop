/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("potato_recipes", (table) => {
    table.integer("baked_potato_id").unique().notNullable();
    table.string("instructions").notNullable();
    table.string("ingredient_list").notNullable();

    table
      .foreign("ingredient_list")
      .references("ingredients")
      .inTable("baked_potato")
      .onDelete("SET NULL");
    table
      .foreign("baked_potato_id")
      .references("id")
      .inTable("baked_potato")
      .onDelete("SET NULL");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("potato_recipes");
};
