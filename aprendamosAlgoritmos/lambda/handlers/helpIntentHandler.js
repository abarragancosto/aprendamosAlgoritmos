const Alexa = require('ask-sdk-core');

module.exports = {
	 canHandle(handlerInput) {
		 return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			 && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
	 },
	 handle(handlerInput) {
		 const speakOutput = 'Prueba a decir comenzar explicación o resolver problema.';

		 return handlerInput.responseBuilder
			 .speak(speakOutput)
			 .reprompt(speakOutput)
			 .getResponse();
	 }
 };
