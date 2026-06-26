/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("baked_potato").del();

  await knex("baked_potato").insert([
    { id: 1, name: "Classic" },
    { id: 2, name: "South Western" },
    { id: 3, name: "Philly" },
  ]);

  // Reset the auto-increment sequence
  await knex.raw(`
    SELECT setval(
      pg_get_serial_sequence('baked_potato', 'id'),
      (SELECT MAX(id) FROM baked_potato),
      true
    );
  `);
};
