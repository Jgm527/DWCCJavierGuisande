# Calculadora de notas

Calculadora web para calcular la nota final de una asignatura a partir de la nota del examen y de la práctica.

## Fórmula

La nota final se calcula con la siguiente fórmula:

**nota final = examen × 0,7 + práctica × 0,3**

Para aprobar es necesario obtener una nota final igual o superior a 5.

## Archivos

* `index.html` — estructura de la página.
* `estilos.css` — estilos y diseño responsive.
* `calculadora.js` — lógica de la calculadora.

## Mínimos

* Formulario con nota del examen y nota de la práctica.
* Etiquetas `<label>` para los campos.
* Botón para calcular.
* Zona para mostrar el resultado.
* Uso de `<header>`, `<main>` y `<footer>`.
* Diseño responsive mediante CSS.
* Resultado en verde si se aprueba y en rojo si se suspende.
* Cálculo de la nota final con dos decimales.
* Indicación de «Aprobado» o «Suspenso».
* El formulario no recarga la página.

## Puntos a mayores

Se han realizado todos los puntos a mayores excepto la publicación mediante GitHub Pages.

### A. Validación

Los campos se validan para comprobar que:

* No estén vacíos.
* La nota esté entre 0 y 10.
* Los campos con errores se marquen visualmente en rojo.
* Los avisos se muestran directamente en la página, sin utilizar `alert()`.

### B. Cálculo en vivo

La nota final se actualiza automáticamente mientras se escriben o modifican las notas, sin necesidad de pulsar el botón «Calcular».

### C. Nota mínima

Se muestra la nota mínima que es necesario obtener en el examen para aprobar dependiendo de la nota obtenida en la práctica.

### D. Historial

Los cálculos realizados se guardan utilizando `localStorage`.

El historial:

* Se conserva al recargar la página.
* Muestra las notas del examen y de la práctica.
* Muestra la nota final.
* Indica si el resultado es aprobado o suspenso.
* Incluye un botón para borrar el historial.

### E. Calificación

Además de la nota numérica, se muestra la calificación correspondiente:

* **Insuficiente:** menos de 5.
* **Suficiente:** de 5 a menos de 6.
* **Bien:** de 6 a menos de 7.
* **Notable:** de 7 a menos de 9.
* **Sobresaliente:** 9 o más.