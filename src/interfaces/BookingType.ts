export interface BookingType {
    name: string;
    photo: string;
    check_in: string;
    check_out: string;
    room: number;
    requests: string;
    booking_date: string;
    price: number;
    status: 'Paid' | 'Refunded' | 'Pending';
}

export interface BookingTypeID extends BookingType {
    id: string
}