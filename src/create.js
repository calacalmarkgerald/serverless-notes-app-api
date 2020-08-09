import response, { RESPONSE_TYPE } from './libs/response';
import config from './config';
import NotesService from './services/NoteService';

const noteService = new NotesService(config);

export async function main(event, context) {
  const { body, requestContext } = event;
  const data = JSON.parse(body);

  try {
    const result = await noteService.create({
      attachment: data.attachment,
      userId: requestContext.identity.cognitoIdentityId,
    });
    console.log(result);

    return response(RESPONSE_TYPE.SUCCESS, result);
  } catch (error) {
    console.log(error);

    return response(RESPONSE_TYPE.ERROR, { message: error.message });
  }
}
