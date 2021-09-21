import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from '../election';
import { OrgSubscribedUser } from '../org-subscribed-user';

@Injectable({
  providedIn: 'root'
})
export class UserelectionService {

  constructor(private _http : HttpClient) { }

  getOrganizations(username:any,password:any,userid:number):Observable<OrgSubscribedUser[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<OrgSubscribedUser[]>("https://pickmyvote.herokuapp.com/userorganizations/"+userid,{headers})
  }

  getelections(username:any,password:any,orgid:number):Observable<Election[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Election[]>("https://pickmyvote.herokuapp.com/userelection/"+orgid,{headers})
  }

}
