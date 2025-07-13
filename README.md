# 🌍 NgCO₂Print - Calcula tu Huella de Carbono

**NgCO₂Print** es una aplicación web desarrollada con **Angular** y **TailwindCSS** que permite calcular la huella de carbono generada por tus desplazamientos en distintos medios de transporte. Además, traduce ese impacto en equivalencias visuales (lavadoras, emails, carne, etc.) y sugiere alternativas para compensarla, como plantar árboles, cambiar bombillas o usar bicicleta.

---

## 🚀 Características

- ✅ Cálculo preciso de la huella de CO₂ vía **API externa (RapidAPI)**
- 📊 Visualización del impacto con equivalencias fáciles de entender
- 🌱 Sugerencias prácticas para compensar tu huella
- 🧠 Datos basados en fuentes científicas como EPA y Carbon Trust
- 📱 Totalmente **responsive** y optimizado para móviles
- 🧩 Arquitectura modular con componentes Angular separados:
  - `SidebarComponent`: entrada de datos (transporte, km, tipo, periodo)
  - `ImpactosComponent`: visualización de equivalencias contaminantes
  - `AlternativasComponent`: sugerencias para compensar la huella
  - `AppComponent`: distribución general y lógica del flujo de datos

---

## 🛠️ Tecnologías usadas

- [Angular 17](https://angular.io/) (TypeScript)
- [TailwindCSS](https://tailwindcss.com/)
- [RapidAPI - CarbonFootprint API](https://rapidapi.com/carbonfootprint/api/carbonfootprint1)
- HTML5 / CSS3

---

## 📦 Instalación y uso local

```bash
# Clona el repositorio
git clone https://github.com/Fibanezv/ngCO2Print.git
cd ngCO2Print

# Clona el repositorio
Incluye tu API_KEY en Constantes

# Instala dependencias
npm install

# Inicia el servidor
ng serve
