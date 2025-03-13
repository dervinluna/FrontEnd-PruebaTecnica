import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanPagosService {
  private apiUrl = '/api/PlanPagos';

  constructor(private http: HttpClient) {}

  obtenerPlanDePagos(prestamoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${prestamoId}`);
  }

  generarPlanDePagos(prestamoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${prestamoId}/generar`, {});
  }

  eliminarPlanDePagos(prestamoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${prestamoId}/eliminar`);
  }
}
