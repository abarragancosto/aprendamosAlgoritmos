
module.exports = function getSpeakOutput(handlerInput, path) {

	const texts = require(`../textos/${path}`);

	if (handlerInput.requestEnvelope.request.intent !== undefined){
		return handlerInput.requestEnvelope.request.intent.name === 'volverIntent' ? texts.withVolverIntent() : texts.firstTime();
	}

	return texts.firstTime();

};
