import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactosFormComponent } from './contactos/contactos-form/contactos-form.component';
import { ContactosListComponent } from './contactos/contactos-list/contactos-list.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"nuevo", component: ContactosFormComponent},
  {path:"lista", component: ContactosListComponent},
  {path:"edit/:id", component: ContactosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
