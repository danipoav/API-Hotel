import { faker } from '@faker-js/faker';
import { BookingTypeID } from '../interfaces/BookingType';
import { RoomTypeID } from '../interfaces/RoomType';
import { UserTypeID } from '../interfaces/UserType';
import { ContactTypeID } from '../interfaces/ContactType';

const createRandomBooking = (): BookingTypeID => {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
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

const createRandomRoom = (): RoomTypeID => {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        photo: faker.image.avatarGitHub(),
        bed_type: faker.helpers.arrayElement(['Suite', 'Double Bed', 'Double Superior', 'Single Bed']),
        room_number: faker.number.int({ min: 0, max: 500 }),
        facilities: faker.lorem.sentence(),
        price: faker.number.int({ min: 300, max: 1000 }),
        status: faker.helpers.arrayElement(['Booked', 'Available'])
    }
}

const createRandomUser = (): UserTypeID => {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        photo: faker.image.avatar(),
        order_date: faker.date.past().toISOString(),
        check_in: faker.date.future().toISOString(),
        check_out: faker.date.future().toISOString(),
        room_type: faker.helpers.arrayElement(['Deluxe A-7', 'Deluxe A-54', 'Deluxe A-18', 'Deluxe A-25']),
        status: faker.helpers.arrayElement(['Pending', 'Paid', 'Refunded']),
    }
}

const createRandomContact = (): ContactTypeID => {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        join_date: faker.date.past().toISOString(),
        job_desc: faker.person.jobDescriptor(),
        phone: faker.phone.number(),
        days: faker.helpers.arrayElement(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
        photo: faker.image.avatar(),
        status: faker.string.symbol()
    }
}

export const bookingSeed = faker.helpers.multiple(createRandomBooking, { count: 10 });
export const roomSeed = faker.helpers.multiple(createRandomRoom, { count: 10 });
export const userSeed = faker.helpers.multiple(createRandomUser, { count: 10 });
export const contactSeed = faker.helpers.multiple(createRandomContact, { count: 10 });