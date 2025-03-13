import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanPago } from '../models/plan-pagos.model';

@Injectable({
  providedIn: 'root'
})
export class PlanPagosService {
  private apiUrl = '/api/PlanPagos';

  constructor(private http: HttpClient) {}

  obtenerPlanDePagos(prestamoId: number): Observable<PlanPago[]> {
    return this.http.get<PlanPago[]>(`${this.apiUrl}/${prestamoId}`);
  }

  generarPlanDePagos(prestamoId: number): Observable<PlanPago[]> {
    return this.http.post<PlanPago[]>(`${this.apiUrl}/${prestamoId}/generar`, {});
  }

  eliminarPlanDePagos(prestamoId: number): Observable<{ mensaje: string }> { // ✅ Aquí especificamos que devuelve un objeto con `mensaje`
    return this.http.delete<{ mensaje: string }>(`${this.apiUrl}/${prestamoId}/eliminar`);
  }
}
