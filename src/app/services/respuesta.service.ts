import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  async save(respuesta: any) {

    try {

      const resp = await this.http.post<any>(`${this.baseUrl}/response`, {...respuesta}).toPromise();

      return resp.id;
    } catch (error) {

      throw error.error;
    }
  }

  async list() {

    try {
      
      const resp = await this.http.get<any>(`${this.baseUrl}/response`).toPromise();

      return resp;
    } catch (error) {

      throw error.error;
    }
  }
}
