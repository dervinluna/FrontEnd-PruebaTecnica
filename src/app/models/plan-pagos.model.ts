import { Prestamo } from './prestamo.model';

export interface PlanPago {
  id: number;
  prestamoId: number;
  prestamo?: Prestamo | null;
  numeroCuota: number;
  fechaPago: string;
  monto: number;
}
