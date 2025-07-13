import { Component, Input } from '@angular/core';
import { HuellaEquivalencia } from '../../model/HuellaDataConvertida';
import { Constantes } from '../../../utils/constantes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alternativas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alternativas.component.html',
  styleUrl: './alternativas.component.css'
})
export class AlternativasComponent {
  @Input() huellaTotal!: number;
  equivalenciasAlternativas: (HuellaEquivalencia & { cantidad: number })[] = [];
  mapAlternativas = Constantes.HUELLA_EQUIVALENCIAS_ALTERNATIVAS;

  ngOnChanges(): void {
    this.equivalenciasAlternativas = Constantes.HUELLA_EQUIVALENCIAS_ALTERNATIVAS.map(eq => ({
      ...eq,
      cantidad: +(this.huellaTotal / eq.factor).toFixed(1),
    }));
  }

  getAlternativaById(id: string) {
    return this.mapAlternativas.find(i => i.id === id);
  }
  
  calcularCantidad(id: string): number {
    const item = this.getAlternativaById(id);
    return item ? this.huellaTotal / item.factor : 0;
  }
}
