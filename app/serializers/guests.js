import { Serializer } from 'lux-framework';

class GuestsSerializer extends Serializer {
  attributes = [
    'name'
  ];

  hasMany = [
    'rooms'
  ];
}

export default GuestsSerializer;
