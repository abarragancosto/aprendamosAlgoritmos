const Alexa = require('ask-sdk-core');

module.exports = async function (handlerInput) {
	const {attributesManager, requestEnvelope} = handlerInput;
	console.log('ENTROOOOOOOOO AQUÍ Y NO SE COMO ')

	const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
	console.log('Loading from persistent storage: ' + JSON.stringify(persistentAttributes));
	//copy persistent attribute to session attributes
	return attributesManager.setSessionAttributes(persistentAttributes); // ALL persistent attributtes are now session attributes
};
