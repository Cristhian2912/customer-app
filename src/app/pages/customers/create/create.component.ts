import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Customer from 'src/app/shared/models/Customer';
import { CustomerApiService } from 'src/app/shared/services/customer-api.service';
import { Errors } from './CreateCustomersResponse';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  data:Customer = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  };
  errors:Errors = {};
  loading:boolean = false;
  notification:{open:boolean , type: string, message: string} = {
    open: false,
    type: "",
    message: ""
  };
  constructor(
    private customerApi: CustomerApiService,
    public library: FaIconLibrary
  ) {
    library.addIcons(faPlus);
  }

  createCustomer(data: Customer){
    this.loading = true;
    this.customerApi.create(data)
    .subscribe(resp => {
      this.errors = resp.errors;
      this.loading = false;
      if(resp.passes){
        this.data = {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: ""
        };
        this.notification = {open: true, type: "success", message: "Customer created successfully"};
      }else{
        this.notification = {open: true, type: "error", message: "Check the information, there could be some errors."};
      }
    }, error => {
      this.loading = false;
      this.notification = {open: true, type: "error", message: "Opps! An error occurred while trying to send informtion"};
    });
  }

  onChange(e: any){
    this.data = {...this.data, [e.target.name]: e.target.value}
  }
  
  onSubmit(event: Event){
    event.preventDefault();
    this.createCustomer(this.data);
  }

  ngOnInit(): void {
  }

}
