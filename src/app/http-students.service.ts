import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentsService {

  constructor(private httpClient : HttpClient) { }

  get(){
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  post(name : string, email : string){
    return this.httpClient.post<any>("https://jsonplaceholder.typicode.com/users", {name, email});
  }
}
