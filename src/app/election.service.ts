import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';
import { Election } from './election';
import { Organization } from './organization';
import { Payment } from './payment';
import { Voter } from './voter.model';
import { GlobalComponent } from './global/global.component';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor( private _http : HttpClient ) { }

  public getOwnerOrgList(username:any, password:any, ownerId:Number):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<any>(GlobalComponent.api_origin+"api/v1/getOrgsOfOwner/"+ ownerId,{headers});
  }

  getElectionList(username:any,password:any):Observable<Election[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Election[]>(GlobalComponent.api_origin+"getElections/",{headers})
  }

  createNewOrganization(username:string,password:string,organization:Organization):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"api/v1/createOrganization",organization,{headers})
  }

  createNewElection(username:string,password:string,election:Election):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"api/v1/createElection",election,{headers})
  }

  getelections(username:any,password:any,orgid:number):Observable<Election[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Election[]>(GlobalComponent.api_origin+"userelection/"+orgid,{headers})
  }

  createNewPayment(username:string,password:string,payment:Payment):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"api/v1/createPayment",payment,{headers})
  }

  createNewCandidates(username:string,password:string,candidates:Candidate[]):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"api/v1/createCandidate",candidates,{headers})
  }

  createNewVoters(username:string,password:string,voters:Voter[]):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(GlobalComponent.api_origin+"createVoters",voters,{headers})
  }

  getElectionById(username:any,password:any,elecid:number):Observable<Election>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Election>(GlobalComponent.api_origin+"vote/"+elecid,{headers})
  }

  getcandidatesByEId(username:any,password:any,elecid:number):Observable<Candidate[]>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.get<Candidate[]>(GlobalComponent.api_origin+"vote/candidates/"+elecid,{headers})
  }

}
