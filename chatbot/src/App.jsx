import { useEffect, useRef, useState } from "react";
import { companyInfo } from "./companyInfo";
import Chatboticon from "./Components/Chatboticon";
import Chatform from "./Components/Chatform";
import ChatMessage from "./Components/ChatMessage";

const textheadingandparagraph = {
  heading: "First ChatBot 🤖",
  subheading: "Your AI-powered assistant for CodingNepal",
}
const description = "This chatbot is trained on CodingNepal's channel data and can instantly answer questions about it. Here's what it knows:";

const herolist = [
  {
    label: "Channel Name",
    para: "CodingNepal — a YouTube channel dedicated to coding education."
  },
  {
    label: "Purpose",
    para: "Providing free, high-quality coding tutorials to learners worldwide."
  },
  {
    label: "Technologies Covered",
    para: "HTML, CSS, JavaScript, ReactJS, PHP, and many more web technologies."
  },
  {
    label: "Support the Creator",
    para: "A \"Buy Me a Coffee\" page exists so viewers can support the creation of more free content."
  },
  {
    label: "Creator's Message",
    para: "A heartfelt note of appreciation to every learner and supporter of the channel."
  },
]

const App = () => {

  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: companyInfo },
  ]);

  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef(null);

  const generateBotResponse = async (history) => {
    // Helper: replaces the "Thinking..." placeholder (or appends an error message)
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    const systemPrompt = history.find((msg) => msg.hideInChat)?.text || "";
    const messages = history
      .filter((msg) => !msg.hideInChat)
      .map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

    const requestBody = {
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      contents: messages,
    };

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const API_URL =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      // Strip any accidental markdown bold formatting before displaying
      const botReply = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(botReply);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  // Smoothly scroll to the latest message whenever chat history updates
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="container">
      
            {/* ── Hero Section ─────────────────────────────────────────────────────
          Introduces the project and explains what the chatbot knows about.
          All data points come directly from companyInfo (the system prompt).
      ──────────────────────────────────────────────────────────────────── */}
      <div className="hero-section">
        <h1 className="hero-title">{textheadingandparagraph.heading}</h1>
        <p className="hero-subtitle">{textheadingandparagraph.subheading}</p>

        <div className="hero-info">
          <p className="hero-description">
          {description}
          </p>

          <ul className="hero-list">
            {
              herolist.map((item, index) => (
                <li key={index}><span className="hero-list-label">{item.label}</span>{item.para}</li>
              ))
            }
          </ul>

          <p className="hero-cta">
            💬 Click the chat button below on the right and ask anything about CodingNepal!
          </p>
        </div>
      </div>
      {/* ── End Hero Section ─────────────────────────────────────────────── */}

      {/* Floating toggle button — shows chat icon or close icon depending on state */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className={`chatbot-popup ${showChatbot ? "show-chatbot" : ""}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">First Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Message list */}
        <div ref={chatBodyRef} className="chat-body">
          {/* Static greeting shown at the top of every session */}
          <div className="message bot-message">
            <Chatboticon />
            <p className="message-text">
              Hey there 👋🏻 <br /> How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage
              key={index}
              chat={chat}
              generateBotResponse={generateBotResponse}
            />
          ))}
        </div>

        {/* Input area */}
        <div className="chat-footer">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;