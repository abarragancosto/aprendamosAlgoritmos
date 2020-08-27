const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'launchRequest';

		//let speakOutput = utils.getSpeakOutput(handlerInput, filePath);
		let speakOutput = 'Tienes que decir si deseas continuar con tu progreso anterior o no diciendo "Si o no"';


		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket("enunciado", handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
