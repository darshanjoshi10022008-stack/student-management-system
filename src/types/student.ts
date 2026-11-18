export interface Student {
    id: string;
    fullName: string;
    email: string;
    phone:string;
    age:number;
    gender: "Male" | "Femail" | "Other";
    course: string;
    city: string;
}