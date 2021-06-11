export interface Errors{
    firstName?: Array<string>,
    lastName?: Array<string>,
    email?: Array<string>,
    phoneNumber?: Array<string>
}

export default interface CreateCustomersResponse {
    passes: boolean,
    errors: Errors,
    data?: [],
}
