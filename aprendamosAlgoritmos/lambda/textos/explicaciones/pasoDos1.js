module.exports = {
	firstTime() {
		return 'Lo que debemos hacer ahora es elegir cuál sería nuestro siguiente nodo origen. El camino más corto del conjunto de nodos candidatos es el ' +
			'camino del nodo 1 con 15 unidades. Así que seleccionamos el nodo 1 como nodo origen y rellenamos el conjunto de candidatos con los nodos 3 y 4. ' +
			'Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del segundo paso donde se explica el nodo seleccionado y el conjunto de candidatos';
	}
};
