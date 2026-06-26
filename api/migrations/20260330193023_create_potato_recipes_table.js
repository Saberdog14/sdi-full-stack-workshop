/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("potato_recipes", (table) => {
    table.increments("id").primary();

    table.integer("baked_potato_id").unsigned().notNullable();

    table.string("ingredients").notNullable();

    table.text("instructions").notNullable();

    table
      .foreign("baked_potato_id")
      .references("id")
      .inTable("baked_potato")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("potato_recipes");
};
