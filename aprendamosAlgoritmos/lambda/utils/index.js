const showAPLWithScreen = require('./showAPLWithScreen');
const setScreenAttributeWithValue = require('./setSessionAttribute');
const getSpeakOutput = require('./getSpeakOutput');
const sendMessageToWebSocket = require('./sendMessageToWebSocket');
const requestTypeIs = require('./requestTypeIs');
const intentNameIs = require('./intentNameIs');
const attributeScreenIs = require('./attributeScreenIs');
const getAttribute = require('./getAttribute');
const setAttribute = require('./setAttribute');
const loadAttributes = require('./loadAttributes');
const setAttributeWithValue = require('./setAttributeWithValue');
const attributeIs = require('./attributeIs');

module.exports = {
	setScreenAttributeWithValue,
	showAPLWithScreen,
	getSpeakOutput,
	sendMessageToWebSocket,
	requestTypeIs,
	intentNameIs,
	attributeScreenIs,
	setAttribute,
	getAttribute,
	loadAttributes,
	setAttributeWithValue,
	attributeIs
};
