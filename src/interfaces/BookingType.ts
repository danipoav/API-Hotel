export interface BookingType {
    name: string;
    photo: string;
    check_in: Date;
    check_out: Date;
    room: number;
    requests: string;
    booking_date: Date;
    price: number;
    status: 'Paid' | 'Refunded' | 'Pending';
}

export interface BookingTypeID extends BookingType {
    id: string
}