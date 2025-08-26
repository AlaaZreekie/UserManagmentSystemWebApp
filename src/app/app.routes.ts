import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

export const routes: Routes = [
  {path: "", component: UserComponent},
  // {path: "", redirectTo: "user", pathMatch: 'full'},

  {path: "user", component: UserComponent},
  {path: "data-binding", component: DataBindingComponent},
  {}
];
