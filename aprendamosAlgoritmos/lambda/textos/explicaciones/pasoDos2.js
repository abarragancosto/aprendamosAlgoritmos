module.exports = {
	firstTime() {
		return 'Ahora partimos desde el nodo 1 y con distancia 15. Desde el nodo 1 podemos llegar al nodo 3 y al nodo 4. Desde el nodo 1 al 3 ' +
			'hay una distancia de 8 unidades, sumadas a las 15 que ya teníamos hacen 23, que al ser mayor de 20, lo descartamos y nos quedamos como estábamos. ' +
			'desde el nodo 1 al nodo 4 hay una distancia de 15 unidades sumadas a las 15 que ya llevábamos hacen 30, y como no teníamos ninguna referencia anterior, ' +
			'colocamos 30 como distancia del nodo 0 al nodo 4. Si desea volver a escuchar esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';

	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del segundo paso donde se explica el conjunto de las distancias';
	}
};
