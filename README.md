# m-to-n-relationship-jsonapi

Just a simple reference of a many to many relationship using [Lux](https://github.com/postlight/lux/) & JSON API

#### Rules
* Many `Rooms` have and belong to many `Guests`
* Many `Guests` have and belong to many `Rooms`
* (Using `Booking` as the join table/logic)

## Installation

* `git clone`
* `cd m-to-n-relationship-jsonapi`
* `npm install`

## Running / Development

* `lux serve`

## Testing

* `lux test`

## Using

* [Faker](https://github.com/marak/Faker.js/) for DB seeding

## Further Reading / Useful Links
* [Lux](https://github.com/postlight/lux/)
* [Chai](http://chaijs.com/) / [Mocha](http://mochajs.org/)
