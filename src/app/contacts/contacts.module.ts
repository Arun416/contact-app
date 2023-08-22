import  {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { ContactsComponent } from './contacts-manager/contacts/contacts.component';
import { AddContactComponent } from './contacts-manager/add-contact/add-contact.component';
import { ViewContactComponent } from './contacts-manager/view-contact/view-contact.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { LoaderComponent } from './contacts-manager/loader/loader.component';
import { EditContactComponent } from './contacts-manager/edit-contact/edit-contact.component';
import { FilterPipe } from './contacts-manager/search-pipe/filter.pipe';




const routes:Routes = [
    {path:'' , component: ContactsComponent},
    {path:'add-contact', component: AddContactComponent},
    {path:'view-contact', component: ViewContactComponent},
    {path:'view-contact/:id', component: ViewContactComponent},
    {path:'edit-contact/:id', component: EditContactComponent},
]


@NgModule ({
    declarations:[ContactsComponent, AddContactComponent, ViewContactComponent, LoaderComponent, EditContactComponent, FilterPipe],
    imports :[CommonModule,RouterModule.forChild(routes),HttpClientModule,
        ReactiveFormsModule,FormsModule],
    providers: []
})

export class ContactsModule {}