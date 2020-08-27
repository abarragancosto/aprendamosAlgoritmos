const utils = require('../../utils');

const screen = "enunciado";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ContinuarIntent')
			&& utils.attributeIs('explicacion', 'pasoCuatro', handlerInput))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverEnunciadoIntent')
				&& utils.attributeIs("explicacion", screen, handlerInput));
	},
	handle(handlerInput) {
		const texts = require(`../../textos/explicaciones/${screen}`);

		let speakOutput = texts.firstTime();

		utils.showAPLWithScreen(handlerInput, `explicaciones/${screen}`);

		utils.setAttributeWithValue("explicacion", screen, handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
