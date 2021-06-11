import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListModule } from './pages/customers/list/list.module';
import { CreateModule } from './pages/customers/create/create.module';
import { UpdateModule } from './pages/customers/update/update.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ListModule,
    CreateModule,
    UpdateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
