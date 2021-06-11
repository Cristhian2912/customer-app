import { Component, Input, OnInit, Output } from '@angular/core';
import Customer from 'src/app/shared/models/Customer';
import FieldOrderType from './customer-list.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Input() list: Array<Customer> = [];
  @Input() currentPage: number = 1;
  @Input() previousPage: number|null = null;
  @Input() nextPage: number|null = null;
  @Input() totalPages: number = 1;
  @Input() totalResults: number = 0;
  @Input() totalItems: number = 0;
  @Input() onSubmitSearch: Function = () => {};
  @Input() onClickCreate: Function = () => {};
  @Input() onClickReload: Function = () => {};
  // @Input() onAddCustomer: Function = () => {};
  @Input() onClickOrderColumn: Function = () => {};
  @Input() onClickPrevious: Function = () => {};
  @Input() onClickNext: Function = () => {};
  @Input() onGoToPage: Function = () => {};
  @Input() onClickEdit: Function = () => {};

  fieldOrderTypes: Array<FieldOrderType> = [
    {field: "id", orderType: "asc", active: false},
    {field: "firstName", orderType: "asc", active: false},
    {field: "lastName", orderType: "asc", active: false},
    {field: "email", orderType: "asc", active: false},
    {field: "phoneNumber", orderType: "asc", active: false}
  ];

  valueToSearch: string = "";

  constructor() { }

  getArrayOfPages(){
    return Array(this.totalPages).fill(this.totalPages).map((e, index) => index+1);
  }

  handleClickOrder(field: string){
    this.fieldOrderTypes.forEach(item => {
      if(item.field === field){
        item.orderType = item.orderType == 'asc' ? 'desc': 'asc';
        item.active = true;
        this.onClickOrderColumn(field, item.orderType);
      }else{
        item.active = false;
        item.orderType = 'asc';
      }
    });
  }

  handleSubmitSearch(e: Event){
    e.preventDefault();
    this.onSubmitSearch(this.valueToSearch);
    console.log(this.getArrayOfPages());
  }

  handleOnChangeSelect(e: any){
    const target = <HTMLSelectElement>e.target;
    this.onGoToPage(target.value);
  }

  ngOnInit(): void {
    
  }

}
