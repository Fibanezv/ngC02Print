import { Component, Input } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { HuellaEquivalencia } from '../../model/HuellaDataConvertida';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impacto.component.html',
  styleUrl: './impacto.component.css'
})

export class ImpactoComponent {
  @Input() huellaTotal!: number;
  equivalenciasImpacto: (HuellaEquivalencia & { cantidad: number })[] = [];
  mapImpactos = Constantes.HUELLA_EQUIVALENCIAS_IMPACTO;

  ngOnChanges(): void {
    this.equivalenciasImpacto = Constantes.HUELLA_EQUIVALENCIAS_IMPACTO.map(eq => ({
      ...eq,
      cantidad: +(this.huellaTotal / eq.factor).toFixed(1),
    }));
  }

  getImpactoById(id: string) {
    return this.mapImpactos.find(i => i.id === id);
  }
  
  calcularCantidad(id: string): number {
    const item = this.getImpactoById(id);
    return item ? this.huellaTotal / item.factor : 0;
  }
}
