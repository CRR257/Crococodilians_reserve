import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Images } from '../../interface/images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private service: HttpClient) { }

  getImages(): Observable<Images> {
    return this.service.get<Images>(`${environment.backendUrl}/images`);
  }
}
