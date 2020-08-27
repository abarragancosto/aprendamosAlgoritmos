const utils = require('../../utils');

module.exports = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& utils.attributeIs('solucion', 'pasoDosCandidatos', handlerInput);
	},
	handle(handlerInput) {
		let filePath = 'solucion/pasoDosDistanciasFallo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
