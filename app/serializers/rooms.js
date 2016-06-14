import { Serializer } from 'lux-framework';

class RoomsSerializer extends Serializer {
  attributes = [
    'number'
  ];

  hasMany = [
    'guests'
  ];
}

export default RoomsSerializer;
