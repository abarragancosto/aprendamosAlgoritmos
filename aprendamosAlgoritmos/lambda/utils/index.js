const showAPLWithScreen = require('./showAPLWithScreen');
const setScreenAttributeWithValue = require('./setSessionAttribute');
const getSpeakOutput = require('./getSpeakOutput');
const sendMessageToWebSocket = require('./sendMessageToWebSocket');
const requestTypeIs = require('./requestTypeIs');
const intentNameIs = require('./intentNameIs');
const attributeScreenIs = require('./attributeScreenIs');

module.exports = {
	setScreenAttributeWithValue,
	showAPLWithScreen,
	getSpeakOutput,
	sendMessageToWebSocket,
	requestTypeIs,
	intentNameIs,
	attributeScreenIs
};
