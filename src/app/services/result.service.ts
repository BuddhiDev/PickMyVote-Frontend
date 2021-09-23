import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../candidate';
import { GlobalComponent } from '../global/global.component';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http : HttpClient) { }

  getResult(username:any,password:any,elecid:number):Observable<Candidate[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Candidate[]>(GlobalComponent.api_origin+"results/"+elecid,{headers})
  }

}
