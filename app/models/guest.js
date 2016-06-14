import { Model } from 'lux-framework';

class Guest extends Model {
      static hasMany = {
    rooms: {
      inverse: 'guest',
      through: 'booking'
    }
  };
}

export default Guest;
