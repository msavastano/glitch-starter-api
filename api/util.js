/**
 * validate and sanitize data against the defined schema
 * @param {Object} ajv JSON validator
 * @param {Object} schema JSON schema definition
 * @param {Object} payload Payload to be validated and sanitized
 * @param {Object} validationError The error we throw if schema is invalid
 * @param {Object} req an Express request
 * @returns {<Object, Error>} return a valid schema or an error
 */
const validateSwaggerSchema = (ajv, schema, payload) => {
  
  var ajvValidator = ajv.compile({
    $ref: 'swaggerJson' + schema
  });
  
  if (ajvValidator(payload)) {
    return payload;
  }
  const err = new Error(ajvValidator.errors[0].message);
  throw err;
};

module.exports = { validateSwaggerSchema };