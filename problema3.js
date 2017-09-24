/**
 * Tienes 100 manzanas de distintos colors (amarillas, rojas y verdes). Sacar 
 * el porcentaje correspondiente para cada tipo de manzana.
 * 
 * - Amarillas -> 30
 * - Rojas -> 60
 * - Verdes -> 10
 * 
 * Al finalizar imprimras el resultado de la siguiente forma:
 * 
 * Pct. Amarillas = x%
 * Pct. Rojas = x%
 * Pct. Verdes = x%
 */

// Declarar variables.
const manzanasAmarillas = 30;
const manazanasRojas = 63;
const manzanasVerdes = 10;
const totalManzanas= manzanasAmarillas + manazanasRojas + manzanasVerdes;

// formula para calcular el porcentage.
var pctAmarillas = Math.round((manzanasAmarillas / totalManzanas) * 100);
var pctRojas = Math.round((manazanasRojas / totalManzanas) * 100);
var pctVerdes = Math.round((manzanasVerdes / totalManzanas) * 100);

// impresion de resultado mas scrpt concatenado.
 console.log("Pct. Amarillas = " + pctAmarillas + '%');
 console.log("Pct. Rojas = " + pctRojas + '%');
 console.log("Pct. Verdes = " + pctVerdes + '%');