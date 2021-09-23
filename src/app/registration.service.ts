import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GlobalComponent } from './global/global.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any> {
    return this._http.post<any>(GlobalComponent.api_origin+"login", user);
  }


  public registerUserFromRemote(user : User):Observable<any> {
    return this._http.post<any>(GlobalComponent.api_origin+"registerUser", user);
  }

  public getUserFromRemote(username:any,password:any,id : Number):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<any>(GlobalComponent.api_origin+"getUser/"+ id,{headers});
  }

  login(username:string,password:string,user:User):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"getLoggedUser",user,{headers})
  }

  updateUser(username:string,password:string,user:User):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"updateUser",user,{headers})
  }

  verifyUserFromRemote(code:String):Observable<any>{
    
    return this._http.post<any>(GlobalComponent.api_origin+"verify",code)
  }

  
  getUserbyEmail(username:any,password:any,email:any):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<any>(GlobalComponent.api_origin+"getUserbyEmail/"+ email, {headers});
  }

  sendotp(username:any,password:any,user:User):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"sendotp",user,{headers})
  }

  changeUserPassword(username:string,password:string,user:User):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"changePassword",user,{headers})
  }
}
