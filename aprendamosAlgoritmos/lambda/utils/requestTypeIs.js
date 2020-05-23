module.exports = function (handlerInput, requestType) {
	return handlerInput.requestEnvelope.request.type === requestType;
};
