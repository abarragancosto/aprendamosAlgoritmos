module.exports = {
	firstTime() {
		return 'Partiendo del nodo 3, únicamente podemos ir hacia el nodo 4 con una distancia de 20 unidades, que, sumadas a las 20 que ya teníamos, ' +
			'hacen un total de 40 unidades. Distancia mayor que la que actualmente había de 30 unidades. Así que lo dejamos como estaba hasta ahora. ' +
			'Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso tres mostrado completamente del grafo de ejemplo.';
	}
};
