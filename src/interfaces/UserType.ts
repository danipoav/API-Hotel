export interface UserType {
    name: string,
    photo: string,
    order_date: string;
    check_in: string;
    check_out: string;
    room_type: string;
    status: string;
}

export interface UserTypeID extends UserType {
    id: string;
}