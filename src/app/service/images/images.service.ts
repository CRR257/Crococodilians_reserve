import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Images } from '../../shared';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private service: HttpClient) { }

  /**
   * Method to get all images
   */
  getImages(): Observable<Images> {
    return this.service.get<Images>(`${environment.backendUrl}/images`);
  }
}
