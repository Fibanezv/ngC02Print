import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImpactoComponent } from './components/impacto/impacto.component';
import { AlternativasComponent } from './components/alternativas/alternativas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ImpactoComponent, AlternativasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-co2-print';
  huellaTotal: number = 0;

  onHuellaCalculada(valor: number) {
    this.huellaTotal = valor;
  }
}
