import { CustomerType } from "../enums";

export interface Customer {
    id: string;
    type: CustomerType;
}