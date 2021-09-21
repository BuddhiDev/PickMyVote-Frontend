import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  constructor( private _http : HttpClient) { }

  public getOrganizationName(username:any,password:any,id : Number):Observable<Organization>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization>("https://pickmyvote.herokuapp.com/getOrganizationName/"+ id,{headers})
  }

  public getOrganizationList(username:any,password:any):Observable<Organization[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization[]>("https://pickmyvote.herokuapp.com/getOrganizations",{headers})
  }

  public getOrgByOwnerId(username:any, password:any, ownerId:Number):Observable<Organization[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization[]>("https://pickmyvote.herokuapp.com/api/v1/getOrgsOfOwner/"+ ownerId,{headers});
  }
}
