
module.exports = function getSpeakOutput(handlerInput, path) {

	const texts = require(`../textos/${path}`);

	if (handlerInput.requestEnvelope.request.intent !== undefined){
		return (
			handlerInput.requestEnvelope.request.intent.name === 'volverSolucionIntent' ||
			handlerInput.requestEnvelope.request.intent.name === 'volverEnunciadoIntent') ?
			texts.withVolverIntent() :
			texts.firstTime();
	}

	return texts.firstTime();

};
