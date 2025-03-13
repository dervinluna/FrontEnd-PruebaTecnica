export interface Prestamo {
  id: number;
  dpi: string;
  nombreCliente: string;
  monto: number;
  cuotas: number;
  fechaRegistro?: string;
}
