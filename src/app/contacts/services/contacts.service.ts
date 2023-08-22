import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private serverUrl:string = "http://localhost:9000"; //json server
  public  contactServicedata:BehaviorSubject<any> = new BehaviorSubject<[]>([])

  constructor(private http:HttpClient) { }

  getViewContact<v>(data:v){
    this.contactServicedata.next(data);
  }
  onLoadContact<v>():Observable<v>{
    return this.contactServicedata.asObservable();
  }

  getAllContacts() {
    let dataURL:string = `${this.serverUrl}/contacts`
    return this.http.get(dataURL);
  }

  createContact(contact:any) :Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/`
    return this.http.post<IContact>(dataURL,contact)
  }

  ViewContact(id:any):Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/${id}`
    return this.http.get<IContact>(dataURL);
  }

  updateContact(id:any,updatedContact:any):Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/${id}`
    return this.http.patch<IContact>(dataURL,updatedContact);
  }

  deleteContact(id:any) :Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/${id}`
    return this.http.delete<IContact>(dataURL);

  }

  /* public handleError(error: HttpErrorResponse) {
    let errorMessage:string ='';
    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`
    }
    else {
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage)
  } */


}
