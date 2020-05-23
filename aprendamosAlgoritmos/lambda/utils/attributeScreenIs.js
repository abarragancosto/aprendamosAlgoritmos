module.exports = function (handlerInput, attributeName) {
	return handlerInput.requestEnvelope.session.attributes.screen === attributeName;
};
