const utils = require('../utils');

const screen = "password";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeScreenIs(handlerInput,'startNewProgress'));
	},
	handle(handlerInput) {

		const speakOutput = `Necesito que me digas una contraseña para poder comunicarme con la app. Tiene que decir, la contraseña es, seguido de la contraseña`;


		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
