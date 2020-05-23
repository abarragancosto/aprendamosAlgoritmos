const utils = require('../../utils');

const screen = "pasoInicio1";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ExplicacionIntent'))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest')
				&& utils.intentNameIs(handlerInput,'volverIntent')
				&& utils.attributeScreenIs(handlerInput, screen));
	},
	handle(handlerInput) {

		let speakOutput = utils.getSpeakOutput(handlerInput, 'explicaciones/pasoInicio1');

		utils.showAPLWithScreen(handlerInput, 'explicaciones/pasoInicio1');

		utils.setScreenAttributeWithValue(screen, handlerInput);

		utils.sendMessageToWebSocket(screen);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
