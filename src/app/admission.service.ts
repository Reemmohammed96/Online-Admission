import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private readonly api = 'https://epictest.droid-clouds.com/api/v1/addAdmission';
  constructor(private http:HttpClient) { }
 
 getAdmissions():Observable<any>{
  return this.http.get<any[]>(this.api);
 }

}
