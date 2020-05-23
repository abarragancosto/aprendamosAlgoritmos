const Alexa = require('ask-sdk-core');

module.exports = {
	canHandle(handlerInput) {
		return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			&& (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
				|| Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
	},
	handle(handlerInput) {
		const speakOutput = 'Gracias por utilizar nuestra skill. Esperamos verte pronto';
		return handlerInput.responseBuilder
			.speak(speakOutput)
			.getResponse();
	}
};
