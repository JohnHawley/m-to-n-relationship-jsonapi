export function up(schema) {
  return schema.createTable('bookings', table => {
    table.increments('id');
    table.string('date');
    table.string('duration');
    table.integer('guest_id');
    table.integer('room_id');
    table.timestamps();

    table.index([
      'id',
      'guest_id',
      'room_id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('bookings');
}
