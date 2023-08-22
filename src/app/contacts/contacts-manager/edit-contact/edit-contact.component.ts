import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editContactForm!:FormGroup;
  contactId:any;

  constructor(private route:ActivatedRoute,
              private contactServices:ContactsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this. getEditContactData();
    this.editContactForm = this.fb.group({
      name:'',
      mobile:'',
      email:'',
      address:''
    })
  }


  getEditContactData(){
      this.contactId = this.route.snapshot.params['id'];
      this.contactServices.ViewContact(this.contactId).subscribe(response=>{
        this.editContactForm.setValue({
          name: response.name,
          mobile:response.mobile,
          email:response.email,
          address:response.address
        })
      })
  }


  SaveEditContact(editedData:any){
    this.contactServices.updateContact(this.contactId,editedData).subscribe({
      next:editedData=>{
        alert("Contact Updated ")
      }
    })
  }

}
