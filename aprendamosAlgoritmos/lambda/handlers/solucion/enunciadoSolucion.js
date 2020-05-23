const Alexa = require('ask-sdk-core/dist/index');
const utils = require('../../utils');

const screen = "enunciadoSolucion";

module.exports = {
	canHandle(handlerInput) {
		return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResolverIntent')
			|| (handlerInput.requestEnvelope.request.type === 'IntentRequest'
				&& utils.intentNameIs(handlerInput,'volverIntent')
				&& utils.attributeScreenIs(handlerInput, screen));
	},
	handle(handlerInput) {

		let filePath = `solucion/${screen}`;

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setScreenAttributeWithValue(screen, handlerInput);

		utils.sendMessageToWebSocket("enunciado");

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
