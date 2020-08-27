const Alexa = require('ask-sdk-core/dist/index');
const utils = require('../../utils');

const screen = "enunciadoSolucion";

module.exports = {
	canHandle(handlerInput) {
		return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResolverIntent')
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverSolucionIntent')
				&& utils.attributeIs("solucion", screen, handlerInput ));
	},
	handle(handlerInput) {

		let filePath = `solucion/${screen}`;

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setAttributeWithValue("solucion", screen, handlerInput);

		utils.sendMessageToWebSocket("enunciado", handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
