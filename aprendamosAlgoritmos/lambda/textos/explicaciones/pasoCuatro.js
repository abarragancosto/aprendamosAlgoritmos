module.exports = {
	firstTime() {
		return 'El último nodo que nos queda en el conjunto de candidatos es el nodo 4, así que seleccionamos el nodo 4 como nodo origen. ' +
			'Desde el nodo 4, podemos ir hasta el nodo 2. La distancia del nodo 4 al nodo 2 es de 20 unidades que sumadas a las 30 que ya teníamos, ' +
			'hacen un total de 50 unidades. 50 unidades es más que las 10 que había desde el nodo 0 al nodo 2, por lo que las distancias se mantienen como hasta ahora. ' +
			'Como ya no nos queda ningún nodo en el conjunto de candidatos. Daríamos por concluido nuestro problema. Las distancias resultado serían las distancias ' +
			'del último paso. Si desea comenzar de nuevo la explicación diga. Comenzar explicación y si desea resolver un nuevo problema diga. Resolver problema ';
	},
	withVolverIntent() {
		return 'Has vuelto a la pantalla del cuarto paso de la explicación';
	}
};
