module.exports = {
	firstTime() {
		return 'El problema consiste en calcular el camino mínimo de un nodo al resto de nodos del grafo. En este caso de ejemplo, ' +
			'el nodo del que partimos es el nodo 0, así que debemos calcular las distancias entre el nodo 0 y el resto de nodos.' +
			'En cada paso debemos ir calculando los caminos mínimos parcialmente. Para ello vamos marcando el conjunto de nodos candidatos, ' +
			'que son aquellos nodos de los que aún no hemos partido, y las distancias desde el nodo 0 al resto de nodos. Si desea volver a escuchar' +
			'esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return ''
	}
};
