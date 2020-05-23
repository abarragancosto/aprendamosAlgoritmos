const utils = require('../../utils');

const screen = "enunciado";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ContinuarIntent')
			&& utils.attributeScreenIs(handlerInput, "pasoCuatro"))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverIntent')
				&& utils.attributeScreenIs(handlerInput, screen));
	},
	handle(handlerInput) {
		const texts = require(`../../textos/explicaciones/${screen}`);

		let speakOutput = texts.firstTime();

		utils.showAPLWithScreen(handlerInput, `explicaciones/${screen}`);

		utils.setScreenAttributeWithValue(screen, handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
