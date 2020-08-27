const Alexa = require('ask-sdk-core');
// If you disable the skill and reenable it the userId might change and you loose the persistent attributes saved below as userId is the primary key
module.exports = {
	async process(handlerInput, response) {
		if (!response) return; // avoid intercepting calls that have no outgoing response due to errors
		const {attributesManager, requestEnvelope} = handlerInput;
		const sessionAttributes = attributesManager.getSessionAttributes();
		const shouldEndSession = (typeof response.shouldEndSession === "undefined" ? true : response.shouldEndSession); //is this a session end?
		if (shouldEndSession || Alexa.getRequestType(requestEnvelope) === 'SessionEndedRequest') { // skill was stopped or timed out
			// we increment a persistent session counter here
			sessionAttributes['sessionCounter'] = sessionAttributes['sessionCounter'] ? sessionAttributes['sessionCounter'] + 1 : 1;
			// we make ALL session attributes persistent
			console.log('Saving to persistent storage:' + JSON.stringify(sessionAttributes));
			attributesManager.setPersistentAttributes(sessionAttributes);
			await attributesManager.savePersistentAttributes();
		}
	}
};
