import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constantes } from '../utils/constantes';


@Injectable({
  providedIn: 'root'
})

export class ApiTravelCarbonfootprintService {
  private readonly baseUrl = Constantes.BASE_URL; // Reemplaza con la real
  private readonly headers = new HttpHeaders({
    'X-RapidAPI-Key': Constantes.API_KEY,
    'X-RapidAPI-Host': Constantes.API_HOST,
  });
  params = {};
  constructor(private http: HttpClient) {}

  calcularHuella(transporte: string, tipo: string, km: number, periodo: number): Observable<any> {
    const url = this.getUrlByTipo(transporte);

    this.params = this.getParametersByTipo(transporte, tipo, km, periodo);
    console.log("Params" , this.params)
    return this.http.get(url, { headers: this.headers, params: this.params }).pipe(
      catchError(err => {
        console.error('Error en la llamada a la API:', err);
        return throwError(() => err);
      })
    );
  }

  private getParametersByTipo(transporte: string, tipo: string, km: number, periodo: number){
    switch (transporte) {
      case 'coche':
        return this.params = {
          vehicle: tipo,
          distance: (km * periodo).toString(),
        };
      case 'avion':
        return this.params = {
          type: tipo,
          distance: (km * periodo).toString(),
        };
      case 'moto':
        return this.params = {
          type: tipo,
          distance: (km * periodo).toString(),
        };
      case 'publico':
        return this.params = {
          distance: (km * periodo).toString(),
          type: tipo,
        };
      default:
        throw new Error('Tipo de transporte no soportado');
    }
  }

  private getUrlByTipo(transporte: string): string {
    switch (transporte) {
      case 'coche':
        return `${this.baseUrl}/CarbonFootprintFromCarTravel`;
      case 'avion':
        return `${this.baseUrl}/CarbonFootprintFromFlight`;
      case 'moto':
        return `${this.baseUrl}/CarbonFootprintFromMotorBike`;
      case 'publico':
        return `${this.baseUrl}/CarbonFootprintFromPublicTransit`;
      default:
        throw new Error('Tipo de transporte no soportado');
    }
  }
}
