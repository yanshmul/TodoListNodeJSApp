var config = {}

config.host = process.env.HOST || "https://yanshsqlcosmosdb1.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "hdQRjxkRryl1Fxol08Ctnw69rNJvTD2Y90vaL40nKfuA3IFe3L4ows82Lx8m1AjgHiKe6NynlcnJvUXWahbUrg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;