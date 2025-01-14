export interface RoomType {
  name: string,
  photo: string,
  bed_type: 'Suite' | 'Double Bed' | 'Double Superior' | 'Single Bed'
  room_number: number;
  facilities: string;
  price: number;
  status: 'Available' | 'Booked'
}

export interface RoomTypeID extends RoomType {
  id: string;
}