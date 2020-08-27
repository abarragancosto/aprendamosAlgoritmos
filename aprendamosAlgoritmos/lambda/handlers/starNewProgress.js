const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'AMAZON.NoIntent')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'launchRequest';

		let speakOutput = 'Dime qué contraseña quieres para comunicarte con la app';

		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket("enunciado", handlerInput);
		utils.setScreenAttributeWithValue('startNewProgress', handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
