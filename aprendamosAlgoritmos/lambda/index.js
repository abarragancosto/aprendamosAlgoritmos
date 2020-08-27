const Alexa = require('ask-sdk-core');
const handlers = require('./handlers');

const persistenceAdapter = require('./utils/persistenceAdapter')();
const saveAttributes = require('./utils/saveAttributes');

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        handlers.rememberProgress,
        handlers.starNewProgress,
        handlers.defaultAfterLaunch,
        handlers.silenciarIntent,
        handlers.algoritmos,
        handlers.creditos,
        handlers.passwordHandlerWhenStart,
        handlers.needPassword,
        handlers.changePassword,
        handlers.pasoCuatro,
        handlers.pasoDos1,
        handlers.pasoDos2,
        handlers.pasoInicio1,
        handlers.pasoInicio2,
        handlers.pasoInicio3,
        handlers.pasoTres1,
        handlers.pasoTres2,
        handlers.pasoUno1,
        handlers.pasoUno2,
        handlers.enunciado,
        handlers.enunciadoSolucion,
        handlers.pasoInicioCandidatos,
        handlers.pasoInicioCandidatosFallo,
        handlers.pasoInicioDistancias,
        handlers.pasoInicioDistanciasFallo,
        handlers.pasoUnoNodo,
        handlers.pasoUnoNodoFallo,
        handlers.pasoUnoCandidatos,
        handlers.pasoUnoCandidatosFallo,
        handlers.pasoUnoDistancias,
        handlers.pasoUnoDistanciasFallo,
        handlers.pasoDosNodo,
        handlers.pasoDosNodoFallo,
        handlers.pasoDosCandidatos,
        handlers.pasoDosCandidatosFallo,
        handlers.pasoDosDistancias,
        handlers.pasoDosDistanciasFallo,
        handlers.pasoTresNodo,
        handlers.pasoTresNodoFallo,
        handlers.pasoTresCandidatos,
        handlers.pasoTresCandidatosFallo,
        handlers.pasoTresDistancias,
        handlers.pasoTresDistanciasFallo,
        handlers.LaunchRequestHandler,
        handlers.HelpIntentHandler,
        handlers.CancelAndStopIntentHandler,
        handlers.SessionEndedRequestHandler,
        handlers.IntentReflectorHandler
    )
    .addErrorHandlers(
        handlers.ErrorHandler,
    ).addResponseInterceptors(
        saveAttributes
    )
    .withPersistenceAdapter(
        persistenceAdapter
    )
    .lambda();
