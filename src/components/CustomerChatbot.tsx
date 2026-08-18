import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import productsData from '../data/products.json';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: Array<{ id: string; name: string }>;
}

export default function CustomerChatbot() {
  const location = useLocation();
  
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState({ id: '', name: '' });
  const [messageText, setMessageText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: "Hello! We'd be happy to help. Let's get a few details so our team can assist you.",
    },
    {
      id: 'init-2',
      sender: 'bot',
      text: 'May I know your name?',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter a valid name (at least 2 characters).');
      return;
    }
    setErrorMsg('');
    setMessages((prev) => [
      ...prev,
      { id: `user-name-${Date.now()}`, sender: 'user', text: trimmedName },
      {
        id: `bot-email-${Date.now()}`,
        sender: 'bot',
        text: `Thanks, ${trimmedName}! What is your email address?`,
      },
    ]);
    setStep(2);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setMessages((prev) => [
      ...prev,
      { id: `user-email-${Date.now()}`, sender: 'user', text: trimmedEmail },
      {
        id: `bot-phone-${Date.now()}`,
        sender: 'bot',
        text: 'What is your mobile number?',
      },
    ]);
    setStep(3);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedPhone = phone.trim();
    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      setErrorMsg('Please enter a valid mobile number (10 to 15 digits).');
      return;
    }
    setErrorMsg('');
    setMessages((prev) => [
      ...prev,
      { id: `user-phone-${Date.now()}`, sender: 'user', text: trimmedPhone },
      {
        id: `bot-prod-${Date.now()}`,
        sender: 'bot',
        text: 'Which product do you have a query about?',
      },
    ]);
    setStep(4);
  };

  const handleProductSelect = (prodId: string, prodTitle: string) => {
    setSelectedProduct({ id: prodId, name: prodTitle });
    setMessages((prev) => [
      ...prev,
      { id: `user-prod-${Date.now()}`, sender: 'user', text: prodTitle },
      {
        id: `bot-msg-${Date.now()}`,
        sender: 'bot',
        text: 'Please describe your query or problem in a few words. Our team will review it and get back to you.',
      },
    ]);
    setStep(5);
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMsg = messageText.trim();
    if (!trimmedMsg || trimmedMsg.length < 5) {
      setErrorMsg('Please enter at least 5 characters describing your query.');
      return;
    }
    if (trimmedMsg.length > 1000) {
      setErrorMsg('Query description cannot exceed 1000 characters.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await fetch(`${apiBaseUrl}/queries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          message: trimmedMsg,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessages((prev) => [
          ...prev,
          { id: `user-msg-${Date.now()}`, sender: 'user', text: trimmedMsg },
          {
            id: `bot-success-${Date.now()}`,
            sender: 'bot',
            text: `Thank you, ${name}! Your query has been received successfully. Our team will review it and contact you shortly.`,
          },
        ]);
        setSubmitted(true);
        setStep(6);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Chatbot submission error:', error);
      setErrorMsg('Unable to reach server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSelectedProduct({ id: '', name: '' });
    setMessageText('');
    setErrorMsg('');
    setSubmitted(false);
    setStep(1);
    setMessages([
      {
        id: 'init-1',
        sender: 'bot',
        text: "Hello! We'd be happy to help. Let's get a few details so our team can assist you.",
      },
      {
        id: 'init-2',
        sender: 'bot',
        text: 'May I know your name?',
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-[360px] sm:w-[400px] h-[550px] bg-card text-card-foreground rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-hero text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Customer Support</h3>
                  <p className="text-xs text-white/80">Offline • We reply shortly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/85 transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white text-foreground border border-border rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Product Options Step */}
              {step === 4 && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {productsData.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleProductSelect(prod.id, prod.title.trim())}
                      className="bg-white hover:bg-accent border border-border text-left p-3 rounded-xl text-xs font-semibold text-foreground transition-all hover:shadow-sm"
                    >
                      {prod.title.trim()}
                    </button>
                  ))}
                  <button
                    onClick={() => handleProductSelect('other', 'Other Product / General')}
                    className="bg-white hover:bg-accent border border-border text-left p-3 rounded-xl text-xs font-semibold text-foreground transition-all hover:shadow-sm"
                  >
                    Other Product / General
                  </button>
                </div>
              )}

              {/* End success container */}
              {step === 6 && (
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 bg-green-50 border border-green-200 rounded-2xl mt-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  <h4 className="font-bold text-emerald-800 text-sm">Query Submitted Successfully</h4>
                  <p className="text-xs text-emerald-700">
                    Our sales and support team will contact you shortly via email.
                  </p>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(resetChat, 300);
                    }}
                    variant="outline"
                    className="text-emerald-700 border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800 text-xs py-1 h-8"
                  >
                    Close Chat
                  </Button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="px-4 py-2 bg-destructive/10 text-destructive text-xs border-t border-destructive/20 font-medium">
                {errorMsg}
              </div>
            )}

            {/* Sticky Input Footer */}
            {!submitted && step !== 4 && (
              <div className="p-3 bg-white border-t border-border">
                {step === 1 && (
                  <form onSubmit={handleNameSubmit} className="flex items-center space-x-2">
                    <Input
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="flex-grow rounded-xl bg-muted/40 border-border text-sm h-10"
                      autoFocus
                    />
                    <Button type="submit" size="icon" className="rounded-xl h-10 w-10 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleEmailSubmit} className="flex items-center space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="flex-grow rounded-xl bg-muted/40 border-border text-sm h-10"
                      autoFocus
                    />
                    <Button type="submit" size="icon" className="rounded-xl h-10 w-10 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={handlePhoneSubmit} className="flex items-center space-x-2">
                    <Input
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="flex-grow rounded-xl bg-muted/40 border-border text-sm h-10"
                      autoFocus
                    />
                    <Button type="submit" size="icon" className="rounded-xl h-10 w-10 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                )}

                {step === 5 && (
                  <form onSubmit={handleQuerySubmit} className="flex flex-col space-y-2">
                    <Textarea
                      placeholder="Describe your query here..."
                      value={messageText}
                      onChange={(e) => {
                        setMessageText(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="rounded-xl bg-muted/40 border-border text-sm resize-none min-h-[60px]"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="rounded-xl h-10 flex items-center justify-center space-x-2 text-sm"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Query</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (!isOpen && submitted) {
            resetChat();
          }
          setIsOpen(!isOpen);
        }}
        className="w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
