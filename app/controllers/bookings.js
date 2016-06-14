import { Controller } from 'lux-framework';

class BookingsController extends Controller {
  params = [
    'date',
    'duration'
  ];
}

export default BookingsController;
