import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosFormComponent } from './contactos-form/contactos-form.component';
import { ContactosListComponent } from './contactos-list/contactos-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactosFormComponent,
    ContactosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactosModule { }
