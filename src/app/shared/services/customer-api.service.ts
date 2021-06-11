import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Customer from '../models/Customer';
import { CreateCustomerResponse, GetCustomersResponse, UpdateCustomerResponse } from './customer-api.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  private baseUri: string = environment.apiUrl+"/customers";

  constructor(private http: HttpClient) { }

  public create(customer: Customer){
    return this.http.post<CreateCustomerResponse>(this.baseUri, customer);
  }

  public update(customer: Customer){
    return this.http.put<UpdateCustomerResponse>(this.baseUri+"/"+customer.id, customer);
  }
  
  public get(params: {}){
    return this.http.get<GetCustomersResponse>(this.baseUri, {params});
  }
}
