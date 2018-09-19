import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  
  public getAgencies = () : Observable<any> => 
    this.httpClient
      .get("../../assets/launchagencies.json")
      .pipe(map((res: any) => res.agencies));

  public getTypesStatus = () : Observable<any[]> => 
    this.httpClient
      .get("../../assets/launchstatus.json")
      .pipe(map((res: any) => res.types));

  public getTypesMissions = () : Observable<any[]> => 
    this.httpClient
      .get("../../assets/launchmissions.json")
      .pipe(map((res: any) => res.types));

}