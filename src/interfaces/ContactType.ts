export interface ContactType {
    name: string;
    join_date: Date;
    job_desc: string;
    phone: string;
    status: string
    days: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
    photo: string;
}//status active inactive

export interface ContactTypeID extends ContactType{
    id:string;
}