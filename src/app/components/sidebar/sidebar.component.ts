import { Component, EventEmitter, Output } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiTravelCarbonfootprintService } from '../../../services/apiTravelCarbonFootprint';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private apiService: ApiTravelCarbonfootprintService) {}
  @Output() huellaCalculada = new EventEmitter<number>();
  huellaCalculadaTitle: number = 0;
  selectedPeriod: string = ''; // 'puntual', 'semanal', 'mensual' o 'anual'
  transporteSeleccionado: string = 'coche'; // valor por defecto
  tiposTransporte: { label: string, value: string }[] = Constantes.TIPOS_VEHICULOS[this.transporteSeleccionado];
  tipoSeleccionado: string = '';
  stringErrorValidacion: string = '';
  kilometros: number = 0;

  onTransporteChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const valor = select.value;
  
    this.transporteSeleccionado = valor;
    this.tiposTransporte = Constantes.TIPOS_VEHICULOS[valor] || [];
    this.tipoSeleccionado = '';
  }
  

  onSubmit() {
    if (this.validarFormulario()) {
      this.apiService.calcularHuella(
        this.transporteSeleccionado,
        this.tipoSeleccionado,
        this.kilometros,
        Constantes.MAPA_PERIODOS[this.selectedPeriod]
      ).subscribe({
        next: (respuesta: any) => {
          console.log('✅ Respuesta de la API:', respuesta);
          // Aquí puedes guardar el resultado
          const resultado = Math.round(respuesta.carbonEquivalent * 10) / 10;
          this.huellaCalculada.emit(resultado);
          this.huellaCalculadaTitle = resultado;
        },
        error: () => {
          alert('Error al calcular la huella de carbono. Inténtalo más tarde.');
        }
      });  
    } else {
      alert('No se ha informado correctamente los campos del formulario: ' + this.stringErrorValidacion);
      this.stringErrorValidacion = '';
    }
  }
  
  validarFormulario(): boolean {
    const transporteValido = this.transporteSeleccionado !== '';
    const tipoValido = this.tipoSeleccionado !== '';
    const kilometrosValidos = this.kilometros !== null && this.kilometros > 0;
    const periodoValido = this.selectedPeriod !== '';
  
    if (!transporteValido) {
      this.stringErrorValidacion ='\n ❌ Debes seleccionar un tipo de transporte. ';
    }
  
    if (!tipoValido) {
      this.stringErrorValidacion = this.stringErrorValidacion + '\n ❌ Debes seleccionar un tipo específico de transporte. '
    }
  
    if (!kilometrosValidos) {
      this.stringErrorValidacion = this.stringErrorValidacion + '\n ❌ Debes ingresar un número válido de kilómetros. '
    }
  
    if (!periodoValido) {
      this.stringErrorValidacion =this.stringErrorValidacion + '\n ❌ Debes seleccionar al menos un período de tiempo.'
    }
  
    return transporteValido && tipoValido && kilometrosValidos && periodoValido;
  }

  onCheckboxChange(period: string) {
    if (this.selectedPeriod === period) {
      // Si se vuelve a hacer click sobre el mismo, se desmarca
      this.selectedPeriod = '';
    } else {
      this.selectedPeriod = period;
    }
  }
}


