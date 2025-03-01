import { USER_ROLE } from "./user.constant";

export type Tuser= {
    name:string;
    email:string;
    password: string;
    role?: "admin" | "user" ;
    
}


export type TUserRole = keyof typeof USER_ROLE;