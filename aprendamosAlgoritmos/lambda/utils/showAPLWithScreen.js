const Alexa = require('ask-sdk-core');

module.exports = function showAPLWithScreen(handlerInput, screen) {
	if (deviceHaveScreen(handlerInput)) {
		handlerInput.responseBuilder.addDirective({
			type: 'Alexa.Presentation.APL.RenderDocument',
			version: '1.1',
			document: require(`../apl/${screen}`),
			datasources: require(`../data/${screen}.json`)
		})
	}
};

function deviceHaveScreen(handlerInput) {
	const supportedInterfaces = Alexa.getSupportedInterfaces(handlerInput.requestEnvelope);
	const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
	return aplInterface !== null && aplInterface !== undefined;
}
