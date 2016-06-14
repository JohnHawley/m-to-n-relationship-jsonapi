import { Serializer } from 'lux-framework';

class RoomsSerializer extends Serializer {
      hasMany = [
    'guests'
  ];
}

export default RoomsSerializer;
