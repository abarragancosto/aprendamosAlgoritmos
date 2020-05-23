module.exports = {
	firstTime() {
		return 'Tenemos que tener en cuenta que el camino que llevamos recorrido hasta ahora es de una distancia 10, por lo que a todos los nodos ' +
			'a los que nos vayamos desde nuestro nodo origen, en este paso, el nodo 2, debemos sumarle 10 unidades de distancia. Ahora debemos calcular ' +
			'la distancia desde el nodo 2. Observamos que desde el nodo 2 al nodo 1 hay una distancia de 5, más los 10 que teníamos ya, hacen una distancia de 15 y ' +
			'como dicha distancia es menor que los 20 que teníamos del nodo 0 al nodo 1, colocamos en el array de distancia un 15 en la casilla correspondiente al nodo 1. ' +
			'Desde el nodo 2 al nodo 3 si podemos llegar y con una distancia 10, por lo que la distancia desde el nodo 0 al nodo 3 sería de 10 unidades. Colocamos un 20 en el array ' +
			'de distancias y nos seguiría quedando como infinito la distancia al nodo 4 ya que aún no es posible llegar a el. ' +
			'Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso uno mostrado completamente del grafo de ejemplo.';
	}
};
