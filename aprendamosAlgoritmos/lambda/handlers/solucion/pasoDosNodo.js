const utils = require('../../utils');

const screen = "pasoDosNodo";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput,'pasoDosNodoIntent')
			&& utils.attributeScreenIs(handlerInput, "pasoUnoDistancias"))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest')
				&& utils.intentNameIs(handlerInput,'volverIntent')
				&& utils.attributeScreenIs(handlerInput, screen));
	},
	handle(handlerInput) {
		let filePath = `solucion/${screen}`;

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setScreenAttributeWithValue(screen, handlerInput);

		utils.sendMessageToWebSocket(screen);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
