import { Model } from 'lux-framework';

class Booking extends Model {
  static belongsTo = {
    guest: {
      inverse: 'booking'
    },

    room: {
      inverse: 'booking'
    }
  };
}

export default Booking;
