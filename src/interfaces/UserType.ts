export interface UserType {
    name: string,
    photo: string,
    order_date: Date;
    check_in: Date;
    check_out: Date;
    room_type: "Deluxe A-7" | 'Deluxe A-54' | 'Deluxe A-18' | 'Deluxe A-25';
    status: 'Pending' | 'Paid' | 'Refunded';
}

export interface UserTypeID extends UserType {
    id: string;
}