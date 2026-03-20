import { useRef } from "react";

const Chatform = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear the input field right away for a snappy feel
    inputRef.current.value = "";

    // Append the user's message to the chat
    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    // After a short delay, add a "Thinking..." placeholder then fire the API call.
    // The placeholder is replaced in App.jsx once the real response arrives.
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Thinking..." },
      ]);

      // We append a reminder so the model always grounds its answer in companyInfo
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above, address this query: ${userMessage}`,
        },
      ]);
    }, 300);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default Chatform;