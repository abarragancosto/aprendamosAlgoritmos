const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'AMAZON.NoIntent')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'launchRequest';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		// const password = utils.getAttribute('password', handlerInput);

		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket("enunciado", handlerInput);
		utils.setScreenAttributeWithValue('', handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
