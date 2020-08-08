import * as uuid from 'uuid';
import response, { RESPONSE_TYPE } from './libs/response';
import dynamodb from './libs/dynamodb';

export async function main(event, context) {
  const { body, requestContext } = event;
  const data = JSON.parse(body);

  //add validation here in the parsed data

  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  try {
    const result = await dynamodb.put(params);
    console.log(result);

    return response(RESPONSE_TYPE.SUCCESS, params.Item);
  } catch (error) {
    console.log(error);

    return response(RESPONSE_TYPE.ERROR, { message: error.message });
  }
}
