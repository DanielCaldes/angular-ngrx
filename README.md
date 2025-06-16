# Angular NgRx & Charts Demo

Este proyecto es una demostración práctica de conceptos avanzados de Angular, incluyendo el uso de NgRx para gestión de estado y la visualización de datos con gráficos usando `ngx-charts`.

Todo el proyecto se ha generado desde cero con Angular CLI, utilizando SCSS para estilos y estructurado en componentes independientes y reutilizables.

Desplegado en GitHub Pages: https://danielcaldes.github.io/angular-ngrx/

## Tecnologías usadas

- Angular
- NgRx (Store)
- SCSS
- TypeScript
- ngx-charts
- GitHub Pages para despliegue

## Cómo ejecutar localmente

1. `git clone https://github.com/DanielCaldes/angular-ngrx.git`
2. `cd angular-ngrx`
3. `npm install`
4. `ng serve`
5. Abre `http://localhost:4200` en tu navegador

## Descripción del proyecto

1. **Componente de gráficos (`ChartDashboardComponent`)**
   - Contiene dos gráficos (cada uno en un componente independiente): uno de líneas y otro de barras verticales.
   - Se ajustan al tamaño del contenedor y son responsivos.
   - Utiliza `ngx-charts` y admite personalización de colores.

2. **Componente de visualización del contador (`CounterDisplayComponent`)**
   - Muestra el valor actual del contador, obtenido desde el estado global usando NgRx.

3. **Componentes de acciones sobre el contador**
   - `CounterIncrementFiveComponent`: Suma 5 al contador.
   - `CounterDecrementFiveComponent`: Resta 5 al contador.
   - `CounterResetComponent`: Reinicia el valor del contador a 0.

4. **Componente raíz (`AppComponent`)**
   - Integra todos los componentes anteriores.
   - Demuestra cómo múltiples componentes pueden leer y modificar el estado global de forma desacoplada usando NgRx.

## Estructura del proyecto

```
📁 src/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📁 chart-dashboard/
│   │   ├── 📁 bar-chart/
│   │   ├── 📁 line-chart/
│   │   ├── 📁 counter-display/
│   │   ├── 📁 counter-increment-five/
│   │   ├── 📁 counter-decrement-five/
│   │   ├── 📁 counter-reset/
│   ├── 📁 store/
│   │   ├── 📄 counter.actions.ts
│   │   ├── 📄 counter.reducer.ts
│   │   └── 📄 counter.selectors.ts
│   ├── 📄 app.component.ts
│   ├── 📄 app.component.html
│   └── 📄 app.component.scss
├── 📁 assets/
└── 📄 styles.scss
```
