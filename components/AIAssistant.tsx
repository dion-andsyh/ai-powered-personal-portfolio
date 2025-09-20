import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { streamChat } from '../services/geminiService';
import { PORTFOLIO_ASSISTANT_CONTEXT } from '../constants';

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Selamat datang! Saya Asisten Portofolio Profesional milik Dion Andreansyah. Saya siap membantu Anda dengan informasi tentang keahlian teknis, proyek portfolio, pengalaman profesional, atau hal lain yang ingin Anda ketahui. Silakan ajukan pertanyaan Anda." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    
    // Create a placeholder for the model's response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const history = messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
      }));
      
      const stream = await streamChat(PORTFOLIO_ASSISTANT_CONTEXT, history, input);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'model') {
            const updatedMessage = { ...lastMessage, text: lastMessage.text + chunkText };
            return [...prev.slice(0, -1), updatedMessage];
          }
          return prev;
        });
      }
    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong. Please try again.');
      setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'model' && lastMessage.text === '') {
            return prev.slice(0,-1);
          }
          return prev;
      });
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  return (
    <div className="py-16 md:py-24">
      <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        Temui Asisten AI Saya
      </h2>
      <p data-animate style={{ transitionDelay: '200ms' }} className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Didukung oleh Gemini, chatbot ini dapat menjawab pertanyaan Anda tentang portofolio saya. Silakan coba!
      </p>
      <div data-animate style={{ transitionDelay: '400ms' }} className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800">
        <div ref={chatContainerRef} className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`max-w-lg px-4 py-3 rounded-xl ${msg.role === 'user' ? 'bg-sky-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200'} ${isLoading && msg.role === 'model' && index === messages.length - 1 && msg.text === '' ? 'ai-chat-bubble' : ''}`}>
                <div className={`${msg.role === 'model' ? 'whitespace-pre-line leading-relaxed' : ''}`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {error && <div className="text-red-500 text-center animate-fade-in-up">{error}</div>}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan tentang proyek saya..."
            disabled={isLoading}
            className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50 transition-all duration-300 focus:scale-[1.02]"
          />
          <button type="submit" disabled={isLoading} className="bg-sky-500 text-white px-4 py-2 rounded-r-md hover:bg-sky-600 disabled:bg-sky-400 disabled:cursor-not-allowed flex items-center justify-center">
            {isLoading ? (
               <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
               <div className={`transition-transform duration-300 ${input.length > 0 ? 'scale-110 rotate-12' : ''}`}>
                <SendIcon />
               </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;