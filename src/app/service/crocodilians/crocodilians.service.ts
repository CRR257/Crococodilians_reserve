import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crocodilian } from '../../interface/crocodilian';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrocodiliansService {

  constructor(private service: HttpClient) {}

  getCrocodilians(): Observable<Crocodilian> {
    return this.service.get<Crocodilian>(
      `${environment.backendUrl}/crocodilians`
    );
  }
}
