module.exports = {
	firstTime() {
		return 'Para este tercer paso tenemos como conjunto de candidatos el nodo 3 y el nodo 4. Cómo podemos observar en las distancias, ' +
			'el de menor distancia es el nodo 3, así que seleccionamos el nodo 3 como nodo origen y el nodo 4 lo mantenemos en el conjunto de nodos candidatos. ' +
			'Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso tres donde se muestran el nodo seleccionado y el conjunto de candidatos';
	}
};
