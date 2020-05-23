
module.exports = function setScreenAttributeWithValue(value, handlerInput) {
	const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
	sessionAttributes['screen'] = value;
};
