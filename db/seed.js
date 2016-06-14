import faker from 'faker';

import Guest from '../app/models/guest';
import Room from '../app/models/room';
import Booking from '../app/models/booking';

import range from '../app/utils/range';

const {
	name,
	random,
	date,
	helpers: {
		randomize
	}
} = faker;

export default async function seed() {

	await Promise.all(
		[...range(1, 100)].map(() => {
			return Guest.create({
        name: name.firstName() + " " + name.lastName(),
				roomId: randomize([...range(1, 100)])
			});
		})
	);

	await Promise.all(
		[...range(1, 100)].map(() => {
			return Room.create({
				guestId: randomize([...range(1, 100)])
			});
		})
	);

  await Promise.all(
		[...range(1, 100)].map(() => {
			return Booking.create({
        date: date.future(),
        duration: randomize([...range(1, 14)]),
				guestId: randomize([...range(1, 100)]),
				roomId: randomize([...range(1, 100)])
			});
		})
	);

};
