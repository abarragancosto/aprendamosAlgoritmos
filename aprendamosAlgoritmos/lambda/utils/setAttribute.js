
module.exports = function setAttribute(attribute, attributeValue, handlerInput) {
	const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
	sessionAttributes[attribute] = attributeValue;
};
