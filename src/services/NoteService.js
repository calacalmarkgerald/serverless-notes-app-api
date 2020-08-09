import * as uuid from 'uuid';
import dynamodb from '../libs/dynamodb';

class NotesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotesError';
  }
}

class NoteService {
  constructor(config) {
    this._config = config;
    this._dynamodbTable = this._config.app.dynamodb.tableName;
  }

  async create({ attachment, userId }) {
    const params = {
      TableName: this._dynamodbTable,
      Item: {
        userId: userId,
        noteId: uuid.v1(),
        attachment: attachment,
        createdAt: Date.now(),
      },
    };

    try {
      const result = await dynamodb.put(params);
      console.log(result);

      return params.Item;
    } catch (error) {
      console.log(error);

      throw new NotesError(error.message);
    }
  }
}

export default NoteService;
