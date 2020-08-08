export const RESPONSE_TYPE = {
  SUCCESS: 'SUCCESS',
  UNAUTHORIZE: 'UNAUTHORIZE',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  ERROR: 'ERROR',
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

function response(responseType, data) {
  const response = {
    headers: headers,
    body: JSON.stringify(data),
  };

  switch (responseType) {
    case RESPONSE_TYPE.SUCCESS:
      return {
        ...response,
        statusCode: 200,
      };
    case RESPONSE_TYPE.ERROR:
      return {
        ...response,
        statusCode: 500,
      };
    default:
      return {
        ...response,
        statusCode: 500,
      };
  }
}

export default response;
