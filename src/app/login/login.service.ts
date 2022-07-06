import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenRequest } from '../interface/tokenrequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getResponse(TokenRequest: TokenRequest){
    //let httpheaders = new HttpHeaders();
    //httpheaders.append('Access-Control-Allow-Origin', '*');
    //httpheaders.append('Access-Control-Allow-Credentials', 'true');
    //httpheaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //httpheaders.append('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    //httpheaders.append('Content-Type', 'application/json');
    //return this.http.post('https://jsonplaceholder.typicode.com/posts', TokenRequest, {headers:httpheaders}).subscribe();
    let data;
    this.http.post('https://kirito-bot-web-backend.herokuapp.com/api/v1/token', TokenRequest).subscribe(data2 =>{
      console.log(data2);
      data=data2.toString;
    });
    return data;
  }

}
