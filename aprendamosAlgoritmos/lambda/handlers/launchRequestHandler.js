const Alexa = require('ask-sdk-core');
const utils = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        let filePath = 'launchRequest';
        let speakOutput = 'Hola y bienvenido. ¿ Quieres continuar con el progreso anterior ?';
        // let speakOutput = utils.getSpeakOutput(handlerInput, filePath);


        // const password = utils.getAttribute('password', handlerInput);

        const screen = 'launch';
        utils.setScreenAttributeWithValue(screen, handlerInput);
        utils.showAPLWithScreen(handlerInput, filePath);
        utils.sendMessageToWebSocket("enunciado", handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
