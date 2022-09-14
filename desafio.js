/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */


var nombre = 'Elena'

var apellido = 'del Mazo'

var edad = 36

var desarrolladorWeb = true

var cumpleaños = '20-08-1986'

var libroFavorito = {
  título: 'La buena suerte: Claves de la prosperidad', 
  autor: 'Fernando Trias de Bes y Álex Rovira',
  fecha: '23-02-2004',
  url: 'https://www.casadellibro.com/libro-la-buena-suerte-claves-de-la-prosperidad/9788495787552/946844',
}

var pasatiemposFavoritos = [
  'Longboard Surf',
  'Deporte',
  'Guitarra',
  'Aprender',
]

miActividadFavorita = function() {
  console.log ('amo el surfing')
}

console.log(miActividadFavorita())