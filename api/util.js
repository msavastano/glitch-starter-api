/**
 * validate and sanitize data against the defined schema
 * @param {Object} ajv JSON validator
 * @param {Object} schema JSON schema definition
 * @param {Object} payload Payload to be validated and sanitized
 * @param {Object} validationError The error we throw if schema is invalid
 * @param {Object} req an Express request
 * @returns {Promise<Object, Error>} A promise to return a valid schema or an error
 */
const validateSwaggerSchema = (ajv, schema, payload) => {
  
  var ajvValidator = ajv.compile({
    $ref: 'swaggerJson' + schema
  });
  
  console.log(ajvValidator(payload));
  
  if (ajvValidator(payload)) {
    console.log(payload);
    return payload;
  }
  console.log(ajvValidator.errors);
  throw ajvValidator.errors;
};

module.exports = { validateSwaggerSchema };