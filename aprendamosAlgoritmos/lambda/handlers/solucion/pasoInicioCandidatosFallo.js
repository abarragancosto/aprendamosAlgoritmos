const utils = require('../../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeIs('solucion', 'enunciadoSolucion', handlerInput);
	},
	handle(handlerInput) {
		let filePath = 'solucion/pasoInicioCandidatosFallo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);


		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
