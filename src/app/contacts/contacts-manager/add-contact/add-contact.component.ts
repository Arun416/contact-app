import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { AddContacts } from './add-contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm!:FormGroup;
  newContactObj :AddContacts = new AddContacts;
  constructor(private fb: FormBuilder,private contactService:ContactsService) { }

  ngOnInit(): void {
    this.contactForm =this.fb.group({
      name:'',
      mobile:'',
      email:'',
      address:''
    })
    this.getAllContact();
  }

  getAllContact(){
    this.contactService.getAllContacts().subscribe(res=>{

  })
  }

  SaveNewContact(){

    this.newContactObj.name = this.contactForm.value.name;
    this.newContactObj.mobile = this.contactForm.value.mobile;
    this.newContactObj.email = this.contactForm.value.email;
    this.newContactObj.address = this.contactForm.value.address;

    this.contactService.createContact(this.newContactObj).subscribe({
      next:data=>{
          console.log(data,"Response");
          alert("New Contacts Created");
          this.getAllContact();
      },
      error:error=>{
        console.log(error)
      }
    })
    console.log(this.newContactObj)
  }



}
