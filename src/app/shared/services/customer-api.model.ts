import Customer from "../models/Customer";

export interface GetCustomersResponse {
    currentPage: number,
    data: Array<Customer>,
    previousPage?: number|null,
    nextPage?: number|null,
    totalPages: number,
    totalResults: number,
    totalItems: number
  }
  
export interface Errors{
    firstName?: Array<string>,
    lastName?: Array<string>,
    email?: Array<string>,
    phoneNumber?: Array<string>
}

export interface CreateCustomerResponse {
    passes: boolean,
    errors: Errors,
    data?: Customer
}
  
export interface UpdateCustomerResponse {
    passes: boolean,
    errors: Errors,
    data?: Customer
}
