
module.exports = function setAttributeWithValue(attribute, value, handlerInput) {
	const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
	sessionAttributes[attribute] = value;
};
