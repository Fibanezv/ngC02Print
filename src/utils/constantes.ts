import { HuellaEquivalencia } from "../app/model/HuellaDataConvertida";

// src/app/utils/constantes.ts
export class Constantes {
  static BASE_URL = 'https://carbonfootprint1.p.rapidapi.com';
  static API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX';
  static API_HOST = 'carbonfootprint1.p.rapidapi.com';

  static readonly TIPOS_VEHICULOS: Record<string, { label: string, value: string }[]> = {
    coche: [
      { label: '🚗 - Diesel pequeño', value: 'SmallDieselCar' },
      { label: '🚗 - Diesel mediano', value: 'MediumDieselCar' },
      { label: '🚗 - Diesel grande', value: 'LargeDieselCar' },
      { label: '🚗 - Gasolina pequeño', value: 'SmallPetrolCar' },
      { label: '🚗 - Gasolina mediano', value: 'MediumPetrolCar' },
      { label: '🚗 - Gasolina grande', value: 'LargePetrolCar' },
      { label: '🚗 - Hybrido mediano', value: 'MediumHybridCar' },
      { label: '🚗 - Hybrido grande', value: 'LargeHybridCar' }
    ],
    avion: [
      { label: '✈️ - Vuelo Comercial Nacional', value: 'DomesticFlight' },
      { label: '✈️ - Vuelo Comercial Corta Distancia (Clase Económica)', value: 'ShortEconomyClassFlight' },
      { label: '✈️ - Vuelo Comercial Corta Distancia (Clase Business)', value: 'ShortBusinessClassFlight' },
      { label: '✈️ - Vuelo Comercial Larga Distancia (Clase Económica)', value: 'LongEconomyClassFlight' },
      { label: '✈️ - Vuelo Comercial Larga Distancia (Clase Premium)', value: 'LongPremiumClassFlight' },
      { label: '✈️ - Vuelo Comercial Larga Distancia (Clase Business)', value: 'LongBusinessClassFlight' },
      { label: '✈️ - Vuelo Comercial Larga Distancia (Primera Clase)', value: 'LongFirstClassFlight' }
    ],
    moto: [
      { label: '🏍️ - Moto 125cc', value: 'SmallMotorbike' },
      { label: '🏍️ - Moto 250cc', value: 'MediumMotorbike' },
      { label: '🏍️ - Moto 500cc', value: 'LargeMotorBike' }
    ],
    publico: [
      { label: '🚕 - Taxi', value: 'Taxi' },
      { label: '🚌 - Autobús clásico', value: 'ClassicBus' },
      { label: '♻️ - Autobús ecológico', value: 'EcoBus' },
      { label: '🚌 - Autobús interurbano (Coach)', value: 'Coach' },
      { label: '🚆 - Tren nacional', value: 'NationalTrain' },
      { label: '🚊 - Tren ligero', value: 'LightRail' },
      { label: '🚇 - Metro', value: 'Subway' },
      { label: '⛴️ - Ferry (pasajero a pie)', value: 'FerryOnFoot' },
      { label: '🚗⛴️ - Ferry (con coche)', value: 'FerryInCar' }
    ]    
  };

  static MAPA_PERIODOS: Record<string, number> = {
    puntual: 1,
    semanal: 7,
    mensual: 30,
    anual: 365
  };

  static HUELLA_EQUIVALENCIAS_IMPACTO: HuellaEquivalencia[] = [
  {
    id: 'lavadora',
    titulo: 'Tu huella equivale a realizar',
    descripcion: 'Un ciclo de lavado emite alrededor de 0.6 kg de CO₂, según modelo y temperatura usada.',
    unidad: 'lavados',
    factor: 0.6,
    tipo: 'impacto',
  },
  {
    id: 'electricidad',
    titulo: 'Tu huella equivale a consumir ',
    descripcion: 'El promedio de emisiones eléctricas es 0.4 kg de CO₂ por kWh consumido.',
    unidad: 'kWh',
    factor: 0.4,
    tipo: 'impacto',
  },
  {
    id: 'carne',
    titulo: 'Tu huella equivale a producir ',
    descripcion: 'Producir 1 kg de carne roja genera 15-27 kg de CO₂ (incluye transporte, alimentación y metano).',
    unidad: 'kg',
    factor: 20, 
    tipo: 'impacto',
  },
  {
    id: 'botellas',
    titulo: 'Tu huella equivale a crear ',
    descripcion: 'Producir 1 botella de plástico (500 ml) genera 0.08 kg de CO₂.',
    unidad: 'botellas',
    factor: 0.08,
    tipo: 'impacto',
  },
  {
    id: 'emails',
    titulo: 'Tu huella equivale a enviar ',
    descripcion: 'Un email estándar genera 0.02 kg de CO₂ (incluyendo servidores y almacenamiento).',
    unidad: 'emails',
    factor: 0.02,
    tipo: 'impacto',
  },
  {
    id: 'papel',
    titulo: 'Tu huella equivale a generar ',
    descripcion: 'Producir una única hoja A4 emite 5 g (0.005 kg) de CO₂.',
    unidad: 'hojas',
    factor: 0.005,
    tipo: 'impacto',
  }
  ];

  static HUELLA_EQUIVALENCIAS_ALTERNATIVAS: HuellaEquivalencia[] = [
  {
    id: 'arboles',
    titulo: 'Compensa tu huella de carbono plantando',
    descripcion: 'Un árbol promedio puede capturar 22 kg de CO₂ al año (dependiendo de cada especie y clima).',
    unidad: 'árboles',
    factor: 22,
    tipo: 'alternativa',
  },
  {
    id: 'bombillas',
    titulo: 'Compensa tu huella reemplazando',
    descripcion: 'Cambiar una bombilla tradicional (uso 3h/día) por una LED evita en promedio 40 kg de CO₂ al año por bombilla.',
    unidad: 'bombillas',
    factor: 40,
    tipo: 'alternativa',
  },
  {
    id: 'bicicleta',
    titulo: 'Compensa tu huella recorriendo',
    descripcion: 'Reemplazar viajes en coche por trayectos en bicicleta evita aproximadamente 0.21 kg de CO₂ por kilómetro recorrido.',
    unidad: 'km en bicicleta',
    factor: 0.21,
    tipo: 'alternativa',
  },
  {
    id: 'paneles',
    titulo: 'Compensa tu huella instalando',
    descripcion: 'Cada metro cuadrado de panel solar instalado evita la emisión de aproximadamente 45 kg de CO₂ por año.',
    unidad: 'm² de panel solar',
    factor: 45,
    tipo: 'alternativa',
  },
  {
    id: 'ropa',
    titulo: 'Compensa tu huella evitando comprar',
    descripcion: 'Evitar comprar una prenda nueva de ropa (como jeans, camisetas o sudaderas) reduce aproximadamente 30 kg de CO₂.',
    unidad: 'prendas',
    factor: 30,
    tipo: 'alternativa',
  },
  {
    id: 'standby',
    titulo: 'Compensa tu huella apagando',
    descripcion: 'Apagar completamente un dispositivo en vez de dejarlo en modo espera evita aproximadamente 1.5 kg de CO₂ por año.',
    unidad: 'dispositivos',
    factor: 1.5,
    tipo: 'alternativa',
  }
  ];
}
