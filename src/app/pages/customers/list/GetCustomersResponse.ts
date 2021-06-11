import Customer from "src/app/shared/models/Customer";

export default interface GetCustomersResponse {
    currentPage: number,
    data: Array<Customer>,
    previousPage?: number|null,
    nextPage?: number|null,
    totalPages: number,
    totalResults: number,
    totalItems: number
}
