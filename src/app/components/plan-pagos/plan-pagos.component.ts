import { Component, OnInit } from '@angular/core';
import { PlanPagosService } from '../../services/plan-pagos.service';

@Component({
  selector: 'app-plan-pagos',
  standalone: false,
  templateUrl: './plan-pagos.component.html',
  styleUrl: './plan-pagos.component.scss'
})
export class PlanPagosComponent implements OnInit {
  prestamos: any[] = [];
  planPagos: any[] = [];
  prestamoSeleccionado: number | null = null;

  constructor(private planPagosService: PlanPagosService) {}

  ngOnInit(): void {}

  obtenerPlanDePagos(): void {
    if (this.prestamoSeleccionado) {
      this.planPagosService.obtenerPlanDePagos(this.prestamoSeleccionado).subscribe(data => {
        this.planPagos = data;
      }, error => {
        alert('No se encontró un plan de pagos para este préstamo.');
        this.planPagos = [];
      });
    }
  }

  generarPlanDePagos(): void {
    if (this.prestamoSeleccionado) {
      this.planPagosService.generarPlanDePagos(this.prestamoSeleccionado).subscribe(() => {
        alert('Plan de pagos generado con éxito.');
        this.obtenerPlanDePagos();
      });
    }
  }

  eliminarPlanDePagos(): void {
    if (this.prestamoSeleccionado) {
      this.planPagosService.eliminarPlanDePagos(this.prestamoSeleccionado).subscribe(() => {
        alert('Plan de pagos eliminado con éxito.');
        this.planPagos = [];
      });
    }
  }
}
