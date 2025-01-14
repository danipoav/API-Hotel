import { faker } from '@faker-js/faker';
import { BookingTypeID } from '../interfaces/BookingType';

const createRandomBooking = (): BookingTypeID => {
    return {
        id: faker.string.uuid(),
        name: faker.internet.username(),
        photo: faker.image.avatar(),
        check_in: faker.date.future().toISOString(),
        check_out: faker.date.future().toISOString(),
        room: faker.number.int({ min: 0, max: 10 }),
        requests: faker.lorem.sentence(),
        booking_date: faker.date.past().toISOString(),
        price: faker.number.int({ min: 100, max: 500 }),
        status: faker.helpers.arrayElement(['Paid', 'Refunded', 'Pending'])
    }
}

export const bookingSeed = faker.helpers.multiple(createRandomBooking, { count: 10 });