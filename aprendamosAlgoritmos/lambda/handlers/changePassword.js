const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'passwordIntent'));
	},
	handle(handlerInput) {

		const pass = handlerInput.requestEnvelope.request.intent.slots.password.value;

		utils.setAttribute('password', pass, handlerInput);

		const speakOutput = `Se ha almacenado ${pass} como contraseña. Puede continuar navegando por la aplicación`;

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
