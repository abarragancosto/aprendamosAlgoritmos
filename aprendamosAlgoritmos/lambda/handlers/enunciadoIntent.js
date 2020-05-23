const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeScreenIs(handlerInput, 'EnunciadoIntent');
	},
	handle(handlerInput) {
		let speakOutput = 'En la pantalla estás viendo el enunciado. Si necesitas saber cómo se resuelve di. Comenzar explicación. Si ya sabes cómo se resulve di. Resolver problema.';

		utils.showAPLWithScreen("enunciado");
		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
