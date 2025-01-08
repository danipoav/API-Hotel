export interface RoomType {
  name: string,
  photo: string,
  bed_type: string;
  room_number: string;
  facilities: string;
  price: number;
  status: string;
}

export interface RoomTypeID extends RoomType {
  id: string;
}