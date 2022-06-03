import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface UserCredentials {
  user: string;
  credentials: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly resource = `${environment.api}/auth`;

  constructor(private http: HttpClient) {}

  login = (username: string, password: string) => {
    const basicAuth = `${username}:${password}`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${btoa(basicAuth)}`);

    return this.http.post(this.resource, null, {
      headers,
    }) as Observable<UserCredentials>;
  };
}
