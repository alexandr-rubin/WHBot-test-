const handler = async (event: any, bot: any) => {
    try {
      await bot.handleUpdate(JSON.parse(event.body));
      return {
        statusCode: 200,
        body: ""
      };
    } catch (error) {
      console.error("Error in handler:", error);
      return {
        statusCode: 400,
        body: "This endpoint is meant for bot and telegram communication"
      };
    }
  }

module.exports = handler;