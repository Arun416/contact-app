import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  viewContact:any;

  constructor(private contactsService:ContactsService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.contactsService.onLoadContact().subscribe(contacts=>{
      let contactid = this.route.snapshot.params['id']
      this.contactsService.ViewContact(contactid).subscribe({
        next:data=>{
          this.viewContact=data;
        }
      })
    })
  }

  onEditContact(id:any) {
     this.router.navigate([`edit-contact/${id}`]);
  }

  onBackContactLists()  {
    this.router.navigate(['']);
  }


}
