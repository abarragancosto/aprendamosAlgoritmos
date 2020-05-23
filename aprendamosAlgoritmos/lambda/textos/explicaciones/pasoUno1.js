module.exports = {
	firstTime() {
		return 'Lo primero que debemos hacer para completar nuestro primer paso es, decidir de qué nodo partimos. Como el camino más corto hasta ahora ' +
			'es el camino que va del nodo 0 al nodo 2, seleccionamos como nodo origen el nodo 2, por lo que el conjunto de candidatos aún disponible serían los nodos' +
			' uno, tres y cuatro. Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso uno del grafo de ejemplo. ';
	}
};
