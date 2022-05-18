const { serverError, validationError, queryNotFoundError } = require('../errors')
const code = require('./responseCodes')

const sendResponse = (context, statusCode, body) => {
  context.bindings.response = {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: body
  }

  return context.done()
}

const sendSuccess = (context, result) => sendResponse(context, code.SUCCESS, result)

const sendError = (context, statusCode, result, req) => {
  return sendResponse(context, statusCode, { errors: [result] })
}

const sendServerError = (context, err, req) => {
  return sendResponse(context, code.INTERNAL_SERVER_ERROR, { errors: [serverError()] })
}

const sendValidationError = (context, message, req) => sendError(context, code.BAD_REQUEST, validationError(message), req)

const sendQueryNotFoundError = (context, message, req) =>
  sendError(context, code.NOT_FOUND, queryNotFoundError(message), req)

const makeInfoError = (location, message, param, value) => {
  return [{ location, message, param, value: typeof value === 'object' ? JSON.stringify(value) : value }]
}
module.exports.sendResponse = sendResponse
module.exports.sendSuccess = sendSuccess
module.exports.sendServerError = sendServerError
module.exports.sendValidationError = sendValidationError
module.exports.sendQueryNotFoundError = sendQueryNotFoundError
module.exports.makeInfoError = makeInfoError
