function loadConfig() {
  let dynamodb;
  if (process.env.tableName) {
    dynamodb = {
      tableName: process.env.tableName,
    };
  }

  return {
    dynamodb,
  };
}

const appConfigs = loadConfig();

export default appConfigs;
