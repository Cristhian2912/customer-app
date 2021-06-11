import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss']
})
export class SimpleAlertComponent implements OnInit {

  @Input() open: boolean = false;
  @Input() type: string = "info";
  @Input() message: string = "";

  constructor() { }

  getClassSelectorOfType(): string {
    if(this.type == 'success'){
      return "alert-success";
    }else if(this.type == 'error'){
      return "alert-danger";
    }else{
      return "alert-primary";
    }
  }

  ngOnInit(): void {
  }

}
