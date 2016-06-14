require('/Users/johnhawley/Desktop/m-to-n-relationship-jsonapi/node_modules/lux-framework/node_modules/source-map-support').install();

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var luxFramework = require('lux-framework');
var faker = _interopDefault(require('faker'));

var babelHelpers = {};

babelHelpers.asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

babelHelpers.toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

babelHelpers;

class MToNrelationshipJsonapi extends luxFramework.Application {}

var development = {
  log: true
};

class ApplicationController extends luxFramework.Controller {}

class BookingsController extends luxFramework.Controller {
  constructor() {
    var _temp;

    return _temp = super(...arguments), this.params = ['date', 'duration'], _temp;
  }

}

class GuestsController extends luxFramework.Controller {
  constructor() {
    var _temp;

    return _temp = super(...arguments), this.params = ['name'], _temp;
  }

}

class RoomsController extends luxFramework.Controller {}

var database = {
  development: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'm_to-n-relationship-jsonapi_prod'
  }
};

function up(schema) {
  return schema.createTable('guests', table => {
    table.increments('id');
    table.string('name');
    table.timestamps();

    table.index(['id', 'created_at', 'updated_at']);
  });
}

function down(schema) {
  return schema.dropTable('guests');
}

function up$1(schema) {
  return schema.createTable('bookings', table => {
    table.increments('id');
    table.string('date');
    table.string('duration');
    table.integer('guest_id');
    table.integer('room_id');
    table.timestamps();

    table.index(['id', 'guest_id', 'room_id', 'created_at', 'updated_at']);
  });
}

function down$1(schema) {
  return schema.dropTable('bookings');
}

function up$2(schema) {
  return schema.createTable('rooms', table => {
    table.increments('id');

    table.timestamps();

    table.index(['id', 'created_at', 'updated_at']);
  });
}

function down$2(schema) {
  return schema.dropTable('rooms');
}

class Booking extends luxFramework.Model {}

Booking.belongsTo = {
  guest: {
    inverse: 'booking'
  },

  room: {
    inverse: 'booking'
  }
};

class Guest extends luxFramework.Model {}

Guest.hasMany = {
  rooms: {
    inverse: 'guest',
    through: 'booking'
  }
};

class Room extends luxFramework.Model {}

Room.hasMany = {
  guests: {
    inverse: 'room',
    through: 'booking'
  }
};

function routes(route, resource) {
  resource('guests');
  resource('guests');
  resource('rooms');
  resource('bookings');
  resource('rooms');
}

function* range() {
  let start = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  let end = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  while (start <= end) {
    yield start++;
  }
}

const name = faker.name;
const date = faker.date;
const randomize = faker.helpers.randomize;


var seed = (() => {
	var ref = babelHelpers.asyncToGenerator(function* () {

		yield Promise.all([].concat(babelHelpers.toConsumableArray(range(1, 100))).map(function () {
			return Guest.create({
				name: name.firstName() + " " + name.lastName(),
				roomId: randomize([].concat(babelHelpers.toConsumableArray(range(1, 100))))
			});
		}));

		yield Promise.all([].concat(babelHelpers.toConsumableArray(range(1, 100))).map(function () {
			return Room.create({
				guestId: randomize([].concat(babelHelpers.toConsumableArray(range(1, 100))))
			});
		}));

		yield Promise.all([].concat(babelHelpers.toConsumableArray(range(1, 100))).map(function () {
			return Booking.create({
				date: date.future(),
				duration: randomize([].concat(babelHelpers.toConsumableArray(range(1, 14)))),
				guestId: randomize([].concat(babelHelpers.toConsumableArray(range(1, 100)))),
				roomId: randomize([].concat(babelHelpers.toConsumableArray(range(1, 100))))
			});
		}));
	});

	function seed() {
		return ref.apply(this, arguments);
	}

	return seed;
})();

class ApplicationSerializer extends luxFramework.Serializer {}

class BookingsSerializer extends luxFramework.Serializer {
  constructor() {
    var _temp;

    return _temp = super(...arguments), this.attributes = ['date', 'duration'], this.hasOne = ['guest', 'room'], _temp;
  }

}

class GuestsSerializer extends luxFramework.Serializer {
  constructor() {
    var _temp;

    return _temp = super(...arguments), this.attributes = ['name'], this.hasMany = ['rooms'], _temp;
  }

}

class RoomsSerializer extends luxFramework.Serializer {
      constructor() {
            var _temp;

            return _temp = super(...arguments), this.hasMany = ['guests'], _temp;
      }

}

exports.Application = MToNrelationshipJsonapi;
exports.config = development;
exports.ApplicationController = ApplicationController;
exports.BookingsController = BookingsController;
exports.GuestsController = GuestsController;
exports.RoomsController = RoomsController;
exports.database = database;
exports.createGuestsUp = up;
exports.createGuestsDown = down;
exports.createBookingsUp = up$1;
exports.createBookingsDown = down$1;
exports.createRoomsUp = up$2;
exports.createRoomsDown = down$2;
exports.Booking = Booking;
exports.Guest = Guest;
exports.Room = Room;
exports.routes = routes;
exports.seed = seed;
exports.ApplicationSerializer = ApplicationSerializer;
exports.BookingsSerializer = BookingsSerializer;
exports.GuestsSerializer = GuestsSerializer;
exports.RoomsSerializer = RoomsSerializer;
//# sourceMappingURL=bundle.js.map