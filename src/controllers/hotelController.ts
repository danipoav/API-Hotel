import { Request, Response } from "express";

export const getHotelInfo = (req: Request, res: Response) => {
    res.json({
        hotelName: `Danipoav's Hotel`,
        endpoints: {
            authentication: [
                {
                    method: 'POST',
                    path: '/api/auth',
                    description: 'Login to obtain an authentication token',
                    body: 'username, password'
                }
            ],
            bookings: [
                {
                    method: 'GET',
                    path: '/api/bookings',
                    description: 'Get a list of all bookings'
                },
                {
                    method: 'GET',
                    path: '/api/bookings/:id',
                    description: 'Get details of a specific booking by ID'
                },
                {
                    method: 'POST',
                    path: '/api/bookings',
                    description: 'Create a new booking',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'PUT',
                    path: '/api/bookings/:id',
                    description: 'Update an existing booking by ID',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'DELETE',
                    path: '/api/bookings/:id',
                    description: 'Delete a booking by ID'
                }
            ],
            rooms: [
                {
                    method: 'GET',
                    path: '/api/rooms',
                    description: 'Get a list of all rooms'
                },
                {
                    method: 'GET',
                    path: '/api/rooms/:id',
                    description: 'Get details of a specific room by ID'
                },
                {
                    method: 'POST',
                    path: '/api/rooms',
                    description: 'Create a new room',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'PUT',
                    path: '/api/rooms/:id',
                    description: 'Update an existing room by ID',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'DELETE',
                    path: '/api/rooms/:id',
                    description: 'Delete a room by ID'
                }
            ],
            contacts: [
                {
                    method: 'GET',
                    path: '/api/contacts',
                    description: 'Get a list of all contacts information'
                },
                {
                    method: 'GET',
                    path: '/api/contacts/:id',
                    description: 'Get details of a specific contact by ID'
                },
                {
                    method: 'POST',
                    path: '/api/contacts',
                    description: 'Create a new contact',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'PUT',
                    path: '/api/contacts/:id',
                    description: 'Update an existing contact by ID',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'DELETE',
                    path: '/api/contacts/:id',
                    description: 'Delete a contact by ID'
                }
            ],
            users: [
                {
                    method: 'GET',
                    path: '/api/users',
                    description: 'Get a list of all users information'
                },
                {
                    method: 'GET',
                    path: '/api/users/:id',
                    description: 'Get details of a specific user by ID'
                },
                {
                    method: 'POST',
                    path: '/api/users',
                    description: 'Create a new user',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'PUT',
                    path: '/api/users/:id',
                    description: 'Update an existing user by ID',
                    body: 'customerName, roomNumber, checkInDate, checkOutDate'
                },
                {
                    method: 'DELETE',
                    path: '/api/users/:id',
                    description: 'Delete a user by ID'
                }
            ]
        },
    });
};

