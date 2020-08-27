const LaunchRequestHandler = require('./launchRequestHandler');
const HelpIntentHandler = require('./helpIntentHandler');
const ErrorHandler = require('./errorHandler');
const CancelAndStopIntentHandler = require('./cancelAndStopIntentHandler');
const SessionEndedRequestHandler = require('./sessionEndedRequestHandler');
const IntentReflectorHandler = require('./intentReflectorHandler');
const algoritmos = require('./algoritmos');
const creditos = require('./creditos');
const pasoCuatro = require('./explicaciones/pasoCuatro');
const pasoDos1 = require('./explicaciones/pasoDos1');
const pasoDos2 = require('./explicaciones/pasoDos2');
const pasoInicio1 = require('./explicaciones/pasoInicio1');
const pasoInicio2 = require('./explicaciones/pasoInicio2');
const pasoInicio3 = require('./explicaciones/pasoInicio3');
const pasoTres1 = require('./explicaciones/pasoTres1');
const pasoTres2 = require('./explicaciones/pasoTres2');
const pasoUno1 = require('./explicaciones/pasoUno1');
const pasoUno2 = require('./explicaciones/pasoUno2');
const silenciarIntent = require('./silenciarIntent');
const enunciadoSolucion = require('./solucion/enunciadoSolucion');
const pasoInicioCandidatos = require('./solucion/pasoInicioCandidatos');
const pasoInicioCandidatosFallo = require('./solucion/pasoInicioCandidatosFallo');
const pasoInicioDistancias = require('./solucion/pasoInicioDistancias');
const pasoInicioDistanciasFallo = require('./solucion/pasoInicioDistanciasFallo');
const pasoUnoNodo = require('./solucion/pasoUnoNodo');
const pasoUnoNodoFallo = require('./solucion/pasoUnoNodoFallo');
const pasoUnoCandidatos = require('./solucion/pasoUnoCandidatos');
const pasoUnoCandidatosFallo = require('./solucion/pasoUnoCandidatosFallo');
const pasoUnoDistancias = require('./solucion/pasoUnoDistancias');
const pasoUnoDistanciasFallo = require('./solucion/pasoUnoDistanciasFallo');
const pasoDosNodo = require('./solucion/pasoDosNodo');
const pasoDosNodoFallo = require('./solucion/pasoDosNodoFallo');
const pasoDosCandidatos = require('./solucion/pasoDosCandidatos');
const pasoDosCandidatosFallo = require('./solucion/pasoDosCandidatosFallo');
const pasoDosDistancias = require('./solucion/pasoDosDistancias');
const pasoDosDistanciasFallo = require('./solucion/pasoDosDistanciasFallo');
const pasoTresNodo = require('./solucion/pasoTresNodo');
const pasoTresNodoFallo = require('./solucion/pasoTresNodoFallo');
const pasoTresCandidatos = require('./solucion/pasoTresCandidatos');
const pasoTresCandidatosFallo = require('./solucion/pasoTresCandidatosFallo');
const pasoTresDistancias = require('./solucion/pasoTresDistancias');
const pasoTresDistanciasFallo = require('./solucion/pasoTresDistanciasFallo');
const enunciado = require('./explicaciones/enunciado');
const password = require('./passwordHandler');
const defaultAfterLaunch = require('./defaultAfterLaunch');
const rememberProgress = require('./rememberProgress');
const starNewProgress = require('./starNewProgress');

module.exports = {
    LaunchRequestHandler,
    HelpIntentHandler,
    ErrorHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler,
    silenciarIntent,
    algoritmos,
    creditos,
    pasoCuatro,
    pasoDos1,
    pasoDos2,
    pasoInicio1,
    pasoInicio2,
    pasoInicio3,
    pasoTres1,
    pasoTres2,
    pasoUno1,
    pasoUno2,
    enunciadoSolucion,
    pasoInicioCandidatos,
    pasoInicioCandidatosFallo,
    pasoInicioDistancias,
    pasoInicioDistanciasFallo,
    pasoUnoNodo,
    pasoUnoNodoFallo,
    pasoUnoCandidatos,
    pasoUnoCandidatosFallo,
    pasoUnoDistancias,
    pasoUnoDistanciasFallo,
    pasoDosNodo,
    pasoDosNodoFallo,
    pasoDosCandidatos,
    pasoDosCandidatosFallo,
    pasoDosDistancias,
    pasoDosDistanciasFallo,
    pasoTresNodo,
    pasoTresNodoFallo,
    pasoTresCandidatos,
    pasoTresCandidatosFallo,
    pasoTresDistancias,
    pasoTresDistanciasFallo,
    enunciado,
    password,
    defaultAfterLaunch,
    rememberProgress,
    starNewProgress
};
