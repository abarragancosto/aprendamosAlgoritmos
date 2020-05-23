module.exports = {
	firstTime() {
		return 'El siguiente paso es calcular las distancias parcialmente. Partiendo del nodo 0, vemos que solo poodemos ' +
			'acceder al nodo 1 y 2. Como podemos observar, la distancia al nodo 1 es 20, y como hasta ahora no teníamos ninguna distancia previa, ' +
			'colocamos 20 como distancia. Lo mismo hacemos con la distancia al nodo 2, que en este caso es 10. Al no poder acceder a los nodos 3 y 4 ' +
			'directamente desde el nodo 0, no sabemos aún cual es su distancia mínima, así que colocamos, infinito. Si desea volver a escuchar ' +
			'esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso de inicialización donde se muestra el conjunto de distancias';
	}
};
