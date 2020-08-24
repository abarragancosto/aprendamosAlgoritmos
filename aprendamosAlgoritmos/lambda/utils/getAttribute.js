
module.exports = function getAttribute(attribute, handlerInput) {
	const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
	return sessionAttributes[attribute];
};
