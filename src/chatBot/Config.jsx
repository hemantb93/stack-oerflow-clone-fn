import { createChatBotMessage } from "react-chatbot-kit";

const botName = "stack_bot";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi, I'am ${botName}.`)],

};

export default config;
