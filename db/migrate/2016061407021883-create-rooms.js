export function up(schema) {
  return schema.createTable('rooms', table => {
    table.increments('id');

    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('rooms');
}
