import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Customer from '../../../shared/models/Customer';
// import GetCustomersResponse from './GetCustomersResponse';
import { CustomerApiService } from 'src/app/shared/services/customer-api.service';
import { NavigationExtras, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import endpoints from 'src/app/global/endpoints';
import { GetCustomersResponse } from 'src/app/shared/services/customer-api.model';
import { faStar as fasStar, faChevronLeft, faChevronRight, faPlus, faRedo, faEdit, faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public customers: Array<Customer> = [];
  public customersResponse: GetCustomersResponse = {
    currentPage: 1,
    data: [],
    previousPage: null,
    nextPage: null,
    totalPages: 1,
    totalResults: 0,
    totalItems: 0
  };
  public filters: Array<{field: string, operator: string, value: string}> = [];
  public perPage: number = 10;
  public orderBy: string = "id";
  public orderType: string = "asc";
  public notification:{open:boolean , type: string, message: string} = {
    open: false,
    type: "",
    message: ""
  };

  constructor(private http: HttpClient, private _apiService: CustomerApiService, private _router: Router, library: FaIconLibrary) {
    this.customersResponse = {
      currentPage: 1,
      data: [],
      previousPage: null,
      nextPage: null,
      totalPages: 1,
      totalResults: 0,
      totalItems: 0
    };
    library.addIcons(fasStar, faChevronLeft, faChevronRight, faPlus, faRedo, faEdit, faLongArrowAltUp, faLongArrowAltDown);
  }

  private getCustomers(){
    this.customersResponse.data= [];
    this._apiService.get({
      filters: JSON.stringify(this.filters),
      perPage: this.perPage,
      page: this.customersResponse.currentPage,
      orderBy: this.orderBy,
      orderType: this.orderType
    })
    .subscribe((data: GetCustomersResponse) => {
      this.customersResponse = data;
    }, () => {
      this.notification = {open: true, type: "error", message: "Opps! An error occurred while trying to fetch the informtion"};
    });;
  }

  private resetDefaulPaginationConfig(){
    this.customersResponse.currentPage = 1;
    this.filters = [];
    this.orderBy = "id";
    this.orderType = "asc";
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  
  handleOrderColumn(field: string, orderType: string) {
    this.customersResponse.currentPage = 1;
    this.orderBy = field;
    this.orderType = orderType;
    this.getCustomers();
  }

  handleClickPrevious(){
    this.customersResponse.currentPage = this.customersResponse.currentPage - 1;
    this.getCustomers();
  }

  handleClickNext(){
    this.customersResponse.currentPage = this.customersResponse.currentPage + 1;
    this.getCustomers();
  }
  
  handleSubmitSearch(valueToSerach: string){
    this.resetDefaulPaginationConfig();
    this.filters = [{field: 'any', operator: 'CONTAINS', value: valueToSerach}];
    this.getCustomers();
  }

  handleGoToPage(page: number){
    this.customersResponse.currentPage = page;
    this.getCustomers();
  }

  handleClickReload(){
    this.resetDefaulPaginationConfig();
    this.getCustomers();
  }

  handleClickCreate(){
    this._router.navigate([endpoints.customerCreate.path]);
  }

  handleClickEdit(customer: Customer){
    let extras: NavigationExtras = {state: customer};
    this._router.navigate([endpoints.customerUpdate.path], extras);
  }

  fomatFromJson(): string {
    return JSON.stringify({...this.customersResponse, data: []});
  }

}
