import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamoService, Prestamo } from '../../services/prestamo.service';

@Component({
  selector: 'app-prestamo-form',
  standalone: false,
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.scss']
})
export class PrestamoFormComponent implements OnInit, OnChanges {
  @Input() prestamo: Prestamo | null = null;
  @Output() cerrarModal = new EventEmitter<void>();

  prestamoForm!: FormGroup;

  constructor(private fb: FormBuilder, private prestamoService: PrestamoService) {}

  ngOnInit(): void {
    this.prestamoForm = this.fb.group({
      dpi: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      nombreCliente: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1)]],
      cuotas: ['', [Validators.required, Validators.min(1)]],
    });

    // Si el formulario recibe un préstamo, lo llenamos
    if (this.prestamo) {
      this.prestamoForm.patchValue(this.prestamo);
    }
  }

  // ✅ Detecta cambios cuando `prestamo` cambia desde `prestamo-list`
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['prestamo']) {
      if (this.prestamo) {
        // ✅ Si hay un préstamo, llenamos el formulario con sus datos
        this.prestamoForm.patchValue(this.prestamo);
      } else {
        // ✅ Si no hay un préstamo (modo agregar), restablecemos el formulario
        this.prestamoForm.reset();
      }
    }
  }


  guardarPrestamo(): void {
    if (this.prestamoForm.valid) {
      const prestamo: Prestamo = { ...this.prestamoForm.value, id: this.prestamo?.id };

      if (this.prestamo?.id) {
        this.prestamoService.actualizarPrestamo(prestamo).subscribe(() => {
          alert('Préstamo actualizado con éxito');
          this.cerrarModal.emit();
        });
      } else {
        this.prestamoService.agregarPrestamo(prestamo).subscribe(() => {
          alert('Préstamo agregado con éxito');
          this.cerrarModal.emit();
        });
      }
    }
  }
}
