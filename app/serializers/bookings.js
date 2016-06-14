import { Serializer } from 'lux-framework';

class BookingsSerializer extends Serializer {
  attributes = [
    'date',
    'duration'
  ];

  hasOne = [
    'guest',
    'room'
  ];
}

export default BookingsSerializer;
