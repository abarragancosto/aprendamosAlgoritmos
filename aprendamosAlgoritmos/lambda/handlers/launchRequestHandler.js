const Alexa = require('ask-sdk-core');
const utils = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        let filePath = 'launchRequest';

        let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

        utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket("enunciado");

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
