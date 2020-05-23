const utils = require('../../utils');

const screen = "pasoTres1";

module.exports = {
	canHandle(handlerInput) {
		return (
			utils.requestTypeIs(handlerInput, 'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ContinuarIntent')
			&& utils.attributeScreenIs(handlerInput, "pasoDos2")
		) || (
			utils.requestTypeIs(handlerInput, 'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'volverIntent')
			&& utils.attributeScreenIs(handlerInput, screen)
		);
	},
	handle(handlerInput) {

		let filePath = `explicaciones/${screen}`;
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
