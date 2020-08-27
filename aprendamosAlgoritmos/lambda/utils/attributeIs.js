module.exports = function (attributeName, attributeValue, handlerInput) {
	return handlerInput.requestEnvelope.session.attributes[attributeName] === attributeValue;
};
