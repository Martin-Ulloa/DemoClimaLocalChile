# ChileClimaDemo
 Simple app cuyo objetivo es consumir de la API de División Político Administrativa de Chile y de la API de Open Weather Map.

 Versión de Angular CLI: 13.3.5
 Versión de Node: 16.15.0
 Versión de Package Manager: nmp 8.5.5

 Instrucciones:

 Se debe seleccionar una región en el droplist que aparece al inicio, lo que mostrará en un siguiente droplist las provincias correspondientes a la región para elegir una provincia, lo cual mostrará en un tercer droplist las comunas pertenecientes a dicha provincia, para luego escoger la comuna, en cuyo momento se desplegarán 2 tablas, una con la información del nombre de la comuna y sus coordenadas geográficas (latitud y longitud) y otra tabla con el pronóstico del clima para los próximos 4 días con la probabilidad de precipitación y condición de nubosidad.

 Limitaciones:

 Debido al uso del servicio Forecast 5-days 3-hours, cada llamada a la API muestra un conjunto de  instancias del clima separadas en un intervalo de 3 horas, lo que no es representativo del promedio del día. 
 
 Mediante un parámetro opcional llamado "cnt" se puede delimitar la cantidad de instancias contimuas que se reciben (que por defecto es 40, ya que se requieren 8 instancias para cubrir 24 horas en intervalos de 3 horas, por 5 dias son 40), pero no se pudo realizar dentro del tiempo estipulado la lógica para promediar los valores por cada 8 instancias (para obtener una representación de la probabilidad de precipitación del día completo, aunque de todas maneras habría sido imposible para el caso de nubosidad, que es un string) o obtener solo 1 instancia saltándose de 8 en 8, solo se muestran las 4 instancias de intervalos continuos de 3 horas del día siguiente.

 Tampoco se logró ahondar en el ámbito de las pruebas unitarias, aunque se hizo lo más que se pudo para desacoplar los componentes y servicios para eventualmente implementar dichas pruebas.