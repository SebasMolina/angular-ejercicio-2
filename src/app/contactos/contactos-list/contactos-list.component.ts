import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit {

  contactos: Contact[]=[];

  constructor(
    private contactosService:ContactosService,
  ) { }

  ngOnInit(): void {
    this.contactos= this.contactosService.getContactos();
  }

  deleteContacto(id:string){
    this.contactosService.deletecontacto(id);
  }
}
