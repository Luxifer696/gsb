import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  get (route:string, data?:any): Observable<any>{
    const params: HttpParams = new HttpParams({fromObject: data});
    return this.http.get('route', {params});
  }

  post (route:string, data:any): Observable<any>{
    return this.http.post(route, data);
  }
}
