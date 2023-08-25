import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactosService } from '../contactos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contactos-form',
  templateUrl: './contactos-form.component.html',
  styleUrls: ['./contactos-form.component.css']
})
export class ContactosFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});
  id:string="";

  constructor(
    private formBuilder:FormBuilder,
    private contactosService:ContactosService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.contactForm= this.formBuilder.group({
      nombresContacto:['',Validators.required],
      apellidosContacto:['',Validators.required],
      emailContacto:['',[Validators.required,Validators.email]],
      nroTelefonoContacto:['',Validators.required],
      fechaCumpleaniosContacto:['',Validators.required],
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "";
    
    if(this.id){
      let contacto = this.contactosService.getContacto(this.id);
      if(contacto){
        this.contactForm.patchValue(contacto)
      }
    }
  }


  submit(){
    if(this.contactForm.valid){
      let contacto: Contact = this.contactForm.value;
      if(this.id){
        this.contactosService.updateContacto(this.id,contacto);
      } else {
        this.contactosService.addContacto(contacto);
      }
      this.router.navigate(["/lista"]);
    }
  }
}
