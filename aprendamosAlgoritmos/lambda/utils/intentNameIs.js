module.exports = function (handlerInput, intentName) {
	return handlerInput.requestEnvelope.request.intent.name === intentName;
};
