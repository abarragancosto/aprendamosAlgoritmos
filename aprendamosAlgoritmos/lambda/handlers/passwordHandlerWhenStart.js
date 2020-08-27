const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'passwordIntent')
			&& utils.attributeScreenIs(handlerInput,'startNewProgress'));
	},
	handle(handlerInput) {

		let filePath = 'launchRequest';

		const pass = handlerInput.requestEnvelope.request.intent.slots.password.value;

		utils.setAttribute('password', pass, handlerInput);
		utils.setScreenAttributeWithValue('', handlerInput);

		const enunciadoApp = utils.getSpeakOutput(handlerInput, filePath);

		const speakOutput = `Se ha almacenado ${pass} como contraseña, a continuación paso a describir la aplicación en qué consiste. ${enunciadoApp}`;


		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
