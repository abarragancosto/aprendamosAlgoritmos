module.exports = {
	firstTime() {
		return 'Lo primero que debemos hacer es rellenar nuestro conjunto de candidatos. Como partimos del nodo 0, ' +
			'el conjunto de nodos candidatos es 1, 2, 3 y 4. Si desea volver a escuchar ' +
			'esta explicación diga, repetir, y en caso de querer continuar con la explicación, diga, siguiente.';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del paso de inicialización donde se muestra el conjunto de candidatos';
	}
};
