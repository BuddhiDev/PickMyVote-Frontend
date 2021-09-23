import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global/global.component';
import { Organization } from '../organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  constructor( private _http : HttpClient) { }

  public getOrganizationName(username:any,password:any,id : Number):Observable<Organization>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization>(GlobalComponent.api_origin+"getOrganizationName/"+ id,{headers})
  }

  public getOrganizationList(username:any,password:any):Observable<Organization[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization[]>(GlobalComponent.api_origin+"getOrganizations",{headers})
  }

  public getOrgByOwnerId(username:any, password:any, ownerId:Number):Observable<Organization[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Organization[]>(GlobalComponent.api_origin+"api/v1/getOrgsOfOwner/"+ ownerId,{headers});
  }
}
