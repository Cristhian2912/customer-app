import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Customer from 'src/app/shared/models/Customer';
import { CustomerApiService } from 'src/app/shared/services/customer-api.service';
import { Errors } from '../create/CreateCustomersResponse';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  data:Customer = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  };
  errors:Errors = {};
  passes:boolean = false;
  loading:boolean = false;
  notification:{open:boolean , type: string, message: string} = {
    open: false,
    type: "",
    message: ""
  };

  constructor(
    private _router: Router,
    private _customerApi: CustomerApiService,
    public library: FaIconLibrary
  ) {
    const navigation = this._router.getCurrentNavigation();
    const customerToLoad = navigation?.extras.state;
    if(customerToLoad){
      this.data = <Customer> customerToLoad;
    }
    library.addIcons(faEdit);
  }

  ngOnInit(): void {
  }

  onChange(e: any){
    this.data = {...this.data, [e.target.name]: e.target.value};
  }

  onSubmit(e: Event){
    e.preventDefault();
    this.loading = true;
    this._customerApi.update(this.data)
    .subscribe(resp => {
      this.passes = resp.passes;
      this.errors = resp.errors;
      if(resp.passes){
        this.notification = {
          open: true,
          type: "success",
          message: "Updated succesfully"
        };
      }else{
        this.notification = {
          open: true,
          type: "error",
          message: "Check the information, there could be some errors."
        };
      }
      this.loading = false;
    },
    () => {
      this.notification = {open: true, type: "error", message: "Opps! An error occurred while trying to send informtion"};
      this.loading = false;
    });
  }

  jsonString(){
    return JSON.stringify(this.data);
  }

}
