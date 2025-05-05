import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserMessage = { sender: "user", text: message };
    setChatLog((prev) => [...prev, newUserMessage]);

    try {
      const res = await axios.post("http://localhost:5050/api/chat", {
        message: message,
      });

      const newBotMessage = {
        sender: "bot",
        text: res.data.reply,
      };
      setChatLog((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    }

    setMessage("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-raisin mb-4">Chat with Hopebot</h1>
      <div className="bg-white border rounded-lg p-4 h-96 overflow-y-scroll mb-4">
        {chatLog.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 text-${msg.sender === "user" ? "right" : "left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-cyclamen text-white ml-auto"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-raisin text-white px-4 py-2 rounded-lg hover:bg-lavender hover:text-raisin transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
