import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from '../election';
import { GlobalComponent } from '../global/global.component';
import { OrgSubscribedUser } from '../org-subscribed-user';

@Injectable({
  providedIn: 'root'
})
export class UserelectionService {

  constructor(private _http : HttpClient) { }

  getOrganizations(username:any,password:any,userid:number):Observable<OrgSubscribedUser[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<OrgSubscribedUser[]>(GlobalComponent.api_origin+"userorganizations/"+userid,{headers})
  }

  getelections(username:any,password:any,orgid:number):Observable<Election[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Election[]>(GlobalComponent.api_origin+"userelection/"+orgid,{headers})
  }

}
