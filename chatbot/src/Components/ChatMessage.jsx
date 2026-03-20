import Chatboticon from "./Chatboticon";

const ChatMessage = ({ chat }) => {
  // Don't render hidden messages (like the system/company-info prompt)
  if (chat.hideInChat) return null;

  const isBot = chat.role === "model";

  return (
    <div
      className={`message ${isBot ? "bot" : "user"}-message ${
        chat.isError ? "error" : ""
      }`}
    >
      {isBot && <Chatboticon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;