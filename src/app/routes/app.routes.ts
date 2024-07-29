import { Routes } from '@angular/router';
import { CreateComponent } from '../pages/create/create.component';
import { ListComponent } from '../pages/list/list.component';

export const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: '/create', pathMatch: 'full'},
];
