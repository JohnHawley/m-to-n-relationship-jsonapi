import { Model } from 'lux-framework';

class Room extends Model {
      static hasMany = {
    guests: {
      inverse: 'room',
      through: 'booking'
    }
  };
}

export default Room;
