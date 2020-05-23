const utils = require('../../utils');

const screen = "pasoInicioCandidatos";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'pasoInicioCandidatosIntent')
			&& handlerInput.requestEnvelope.session.attributes.screen === "enunciadoSolucion")
			|| (utils.requestTypeIs(handlerInput,'IntentRequest')
				&& utils.intentNameIs(handlerInput,'volverIntent')
				&& handlerInput.requestEnvelope.session.attributes.screen === screen);
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
