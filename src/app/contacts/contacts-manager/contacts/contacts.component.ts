import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   getAllContacts:any=[];
   public loading!:boolean;
   contactId:any;
   contact:any;
   contactArray=[];
   searchText = '';
   
  constructor(private router:Router,
              private contactsService:ContactsService,
              private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.loading=true;
    this.contactsService.getAllContacts().subscribe(res=>{
      this.getAllContacts = res;
      this.contactArray = this.getAllContacts;
      this.loading=false;
      console.log(this.getAllContacts)
  })
  }

  addNewContact(){
    this.router.navigate(['/add-contact'])
  }

  viewContact(id:any) {
    this.contactsService.getViewContact(id)
    this.router.navigate([`view-contact/${id}`])
    
  }

  selectAllContact(e:any) {
    this.getAllContacts.forEach((x:any) => 
    x.state = e.target.checked,
    )
  }
  deleteAll:any;
  isAllChecked() {
    return this.getAllContacts.every((_: { state: any; }) =>{
       _.state
      this.deleteAll = _.state});
  }

  usercContactData:any;
  saveChecked:any= [];
  selectedContact(e:any,contact_id:number) {
    if(e.target.checked === true){
      this.contactArray.find((x:any)=>{  
       
         if(x.id === contact_id){
            console.log("id:",x.id,"name:",x.name);
            
         } 
        })
       
    }
   
  }

  deleteContact() {
    
  }
  
}
