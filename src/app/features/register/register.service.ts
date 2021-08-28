import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<any> {
    return this.http.post('/api/users/signup', { email, password });
  }
}
