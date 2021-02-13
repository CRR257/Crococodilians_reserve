import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Crocodilian } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class CrocodiliansService {

  constructor(private service: HttpClient) {}

  /**
   * Method to get all crocodilians
   */
  getCrocodilians(): Observable<Crocodilian> {
    return this.service.get<Crocodilian>(
      `${environment.backendUrl}/crocodilians`
    );
  }
}
