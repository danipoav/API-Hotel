import { faker } from '@faker-js/faker';
import { BookingTypeID } from '../interfaces/BookingType';
import { RoomTypeID } from '../interfaces/RoomType';
import { UserTypeID } from '../interfaces/UserType';
import { ContactTypeID } from '../interfaces/ContactType';
import connection from '../database'

const createRandomBooking = async (num: number) => {

    const bookings: BookingTypeID[] = [];

    for (let i = 0; i < num; i++) {
        const newBooking = {
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            photo: faker.image.avatar(),
            check_in: faker.date.future(),
            check_out: faker.date.future(),
            room: faker.number.int({ min: 0, max: 10 }),
            requests: faker.lorem.sentence(),
            booking_date: faker.date.past(),
            price: faker.number.int({ min: 100, max: 500 }),
            status: faker.helpers.arrayElement(['Paid', 'Refunded', 'Pending'])
        };

        bookings.push(newBooking);
    }

    return bookings;
}

const seedBookings = async () => {
    try {
        const fakeBookings = await createRandomBooking(10);

        for (const booking of fakeBookings) {
            await connection.query(
                `INSERT INTO bookings (id, name, photo, check_in, check_out, room, requests, booking_date, price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    booking.id,
                    booking.name,
                    booking.photo,
                    booking.check_in,
                    booking.check_out,
                    booking.room,
                    booking.requests,
                    booking.booking_date,
                    booking.price,
                    booking.status,
                ]
            );
        }

        console.log('Datos insertados correctamente en la tabla bookings.');
        process.exit();
    } catch (error) {
        console.error('Error al insertar los datos:', error);
        process.exit(1);
    }
};

const createRandomRoom = (num: number) => {

    const rooms: RoomTypeID[] = [];

    for (let i = 0; i < num; i++) {
        const newRoom = {
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            photo: faker.image.avatarGitHub(),
            bed_type: faker.helpers.arrayElement(['Suite', 'Double Bed', 'Double Superior', 'Single Bed']),
            room_number: faker.number.int({ min: 0, max: 500 }),
            facilities: faker.lorem.sentence(),
            price: faker.number.int({ min: 300, max: 1000 }),
            status: faker.helpers.arrayElement(['Booked', 'Available'])
        };

        rooms.push(newRoom);
    }

    return rooms;
}

const seedRooms = async () => {
    try {
        const fakeRooms = createRandomRoom(10);

        for (const room of fakeRooms) {
            await connection.query(
                `INSERT INTO rooms (id, name, photo, bed_type, room_number, facilities, price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    room.id,
                    room.name,
                    room.photo,
                    room.bed_type,
                    room.room_number,
                    room.facilities,
                    room.price,
                    room.status
                ]
            );
        }

        console.log('Habitaciones insertadas correctamente en la base de datos.');
        process.exit();
    } catch (error) {
        console.error('Error al insertar habitaciones:', error);
        process.exit(1);
    }
};

const createRandomUser = (num: number) => {

    const users: UserTypeID[] = [];

    for (let i = 0; i < num; i++) {
        const newUser = {
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            photo: faker.image.avatar(),
            order_date: faker.date.past(),
            check_in: faker.date.future(),
            check_out: faker.date.future(),
            room_type: faker.helpers.arrayElement(['Deluxe A-7', 'Deluxe A-54', 'Deluxe A-18', 'Deluxe A-25']),
            status: faker.helpers.arrayElement(['Pending', 'Paid', 'Refunded']),
        };

        users.push(newUser);
    }

    return users;
}

const seedUsers = async () => {
    try {
        const fakeUsers = createRandomUser(10);

        for (const user of fakeUsers) {
            await connection.query(
                `INSERT INTO users (id, name, photo, order_date, check_in, check_out, room_type, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    user.id,
                    user.name,
                    user.photo,
                    user.order_date,
                    user.check_in,
                    user.check_out,
                    user.room_type,
                    user.status
                ]
            );
        }

        console.log('Usuarios insertados correctamente en la base de datos.');
        process.exit();
    } catch (error) {
        console.error('Error al insertar usuarios:', error);
        process.exit(1);
    }
};

const createRandomContact = (num: number) => {

    const contacts: ContactTypeID[] = [];

    for (let i = 0; i < num; i++) {
        const newContact = {
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            join_date: faker.date.past(),
            job_desc: faker.person.jobDescriptor(),
            phone: faker.phone.number(),
            days: faker.helpers.arrayElement(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
            photo: faker.image.avatar(),
            status: faker.string.symbol()
        };

        contacts.push(newContact);
    }

    return contacts;
}

const seedContacts = async () => {
    try {
        const fakeContacts = createRandomContact(10); // Generar 10 contactos

        for (const contact of fakeContacts) {
            await connection.query(
                `INSERT INTO contacts (id, name, join_date, job_desc, phone, days, photo, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    contact.id,
                    contact.name,
                    contact.join_date,
                    contact.job_desc,
                    contact.phone,
                    contact.days,
                    contact.photo,
                    contact.status
                ]
            );
        }

        console.log('Contactos insertados correctamente en la base de datos.');
        process.exit();
    } catch (error) {
        console.error('Error al insertar contactos:', error);
        process.exit(1);
    }
};

// seedBookings();
// seedRooms();
// seedUsers();
// seedContacts();