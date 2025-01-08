export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface ContactType {
    name: string;
    join_date: string;
    job_desc: string;
    phone: string;
    status: string
    days: Day[];
    photo: string;
}

export interface ContactTypeID extends ContactType{
    id:string;
}