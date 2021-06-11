import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import endpoints from './global/endpoints';
import { ListComponent } from './pages/customers/list/list.component';
import { CreateComponent } from './pages/customers/create/create.component';
import { UpdateComponent } from './pages/customers/update/update.component';

const routes: Routes = [
  {path: endpoints.customers.path, component: ListComponent},
  {path: endpoints.customerCreate.path, component: CreateComponent},
  {path: endpoints.customerUpdate.path, component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
