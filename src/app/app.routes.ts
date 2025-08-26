import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: "", component: UserComponent},
  // {path: "", redirectTo: "user", pathMatch: 'full'},

  {path: "user", component: UserComponent},
  {path: "data-binding", component: DataBindingComponent},
  {path: '**', component: PageNotFoundComponent}
];
