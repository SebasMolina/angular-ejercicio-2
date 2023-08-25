import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private contactos: Contact[]=[];

  getContactos(): Contact[]{

    return this.contactos;
  }

  getContacto(id:string): Contact | undefined {
    return this.contactos.find( cont => cont.id === id);
  }

  addContacto(contact:Contact):void {
    contact.id= Date.now().toString();
    this.contactos.push(contact);
    localStorage.setItem("contactos",JSON.stringify(this.contactos));
  }

  deletecontacto(id:string):void {
    let index = this.contactos.findIndex(cont => cont.id === id)
    this.contactos.splice(index,1)
    localStorage.setItem("contactos",JSON.stringify(this.contactos));
  }

  updateContacto(id:string,contacto:Contact):void{
    let index = this.contactos.findIndex(cont => cont.id === id);
    contacto.id=id;
    this.contactos[index]=contacto;
    localStorage.setItem("contactos",JSON.stringify(this.contactos));
  }

  constructor() {
    let guardarContactos = localStorage.getItem("contactos");
    this.contactos = guardarContactos ? JSON.parse(guardarContactos) : []
   }
}
