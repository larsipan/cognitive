var _config = {
    CHAT_CONNECTOR: {
        APP_ID: process.env.MICROSOFT_APP_ID || "", //You can obtain an APP ID and PASSWORD here: https://dev.botframework.com/bots/new
        APP_PASSWORD: process.env.MICROSOFT_APP_PASSWORD || ""
    },
    FACE_SERVICE: {
        API_URL: "https://api.projectoxford.ai/face/v1.0/",
        API_KEY: "420223ef11ca4fd9aebddddd76a886d6"
    }
};
exports.CONFIGURATIONS = _config;
