export function up(schema) {
  return schema.createTable('guests', table => {
    table.increments('id');
    table.string('name');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('guests');
}
