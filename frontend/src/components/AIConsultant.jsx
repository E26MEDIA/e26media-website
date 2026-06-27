import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Sparkles, AlertCircle } from "lucide-react";
import { CHAT } from "../constants/testIds";
import { FAQS } from "../data/faq";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const API = `${BACKEND_URL}/api`;

export function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am E26, your AI Digital Solutions Consultant. Ask me anything about our enterprise Web Design, Software Development, Mobile App Dev, or Digital Marketing capabilities! How can I help you accelerate your business growth today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (e, presetText) => {
    if (e) e.preventDefault();
    const userMsgText = (presetText ?? input).trim();
    if (!userMsgText || isStreaming) return;

    if (!presetText) setInput("");

    // Add user message to state
    const userMsgId = `user-${Date.now()}`;
    const botMsgId = `bot-${Date.now()}`;
    
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text: userMsgText },
      { id: botMsgId, sender: "bot", text: "", loading: true }
    ]);
    
    setIsStreaming(true);

    try {
      const response = await fetch(`${API}/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsgText,
          sessionId: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initialize AI stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let botResponseText = "";

      // Remove loading indicator, start streaming
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === botMsgId ? { ...msg, loading: false } : msg
        )
      );

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") {
              break;
            } else if (data.startsWith("Error: ")) {
              botResponseText += `\n[${data}]`;
            } else {
              // Replace escaped newlines
              const parsedText = data.replace(/\\n/g, "\n");
              botResponseText += parsedText;
            }
            
            // Update bot message state in real-time
            setMessages((prev) => 
              prev.map((msg) => 
                msg.id === botMsgId ? { ...msg, text: botResponseText } : msg
              )
            );
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === botMsgId 
            ? { ...msg, text: "I apologize, but I encountered a temporary connection issue. Please check your network or try again.", loading: false, isError: true } 
            : msg
        )
      );
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-bounce group"
          data-testid={CHAT.toggleButton}
          aria-label="Open AI Consultant"
        >
          <Bot className="w-6 h-6 group-hover:rotate-6 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] text-white font-bold">1</span>
        </button>
      )}

      {/* Glassmorphic Chat Window */}
      {isOpen && (
        <div 
          className="w-[360px] sm:w-[400px] h-[500px] rounded-xl border border-zinc-200/50 shadow-2xl glass flex flex-col overflow-hidden animate-fadeIn"
          data-testid={CHAT.container}
        >
          {/* Header */}
          <div className="bg-zinc-950 text-white p-4 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-semibold text-sm">E26 Solutions Expert</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">Enterprise Architect AI</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-white/40"
            data-testid={CHAT.messageList}
          >
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex gap-2.5 text-left ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                data-testid={msg.sender === "user" ? CHAT.messageUser : CHAT.messageBot}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-green-50 border border-green-200/50 flex items-center justify-center text-green-700 font-bold text-xs shrink-0 mt-0.5 uppercase">
                    E26
                  </div>
                )}
                <div 
                  className={`max-w-[75%] rounded-lg px-4 py-2.5 text-sm font-body leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-zinc-950 text-white rounded-tr-none shadow-sm"
                      : msg.isError 
                        ? "bg-red-50 border border-red-200 text-red-900 rounded-tl-none flex items-start gap-1.5"
                        : "bg-white border border-zinc-200 text-zinc-800 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.isError && <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />}
                  {msg.loading ? (
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && !isStreaming && (
              <div className="space-y-2 pt-1" data-testid="chat-faq-suggestions">
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 pl-9">
                  Frequently asked
                </p>
                <div className="flex flex-col gap-1.5 pl-9">
                  {FAQS.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(null, faq.q)}
                      className="text-left text-xs font-body text-zinc-700 bg-white border border-zinc-200 rounded-lg px-3 py-2 hover:border-green-400 hover:text-green-700 hover:shadow-sm transition-all"
                      data-testid={`chat-faq-chip-${i}`}
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend} 
            className="p-3 border-t border-zinc-200/50 bg-white/75 backdrop-blur-md flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Web Design, Software, Apps..."
              disabled={isStreaming}
              className="flex-1 bg-white border border-zinc-200 rounded-md px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-600 transition-all placeholder:text-zinc-400"
              data-testid={CHAT.input}
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming}
              className="w-10 h-10 rounded-md bg-green-600 text-white flex items-center justify-center hover:bg-green-700 disabled:bg-zinc-100 disabled:text-zinc-400 transition-all shadow-sm shrink-0"
              data-testid={CHAT.sendButton}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
