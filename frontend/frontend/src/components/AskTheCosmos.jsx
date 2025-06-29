import React, { useState } from 'react';
import { askTheCosmos } from '../api/ask';

const AskTheCosmos = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const reply = await askTheCosmos(userMsg);
      setChat(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setChat(prev => [...prev, { role: 'assistant', text: 'Something went wrong!' }]);
    }

    setLoading(false);
  };

  return (

<div className="container bg-dark p-4 rounded mb-7">
  <h3 className="text-white">🤖 Ask the Cosmos</h3>
  <div className="row g-2 my-3">
  <div className="col-md-9">
    <input
      type="text"
      className="form-control bg-white text-black border-secondary"
      placeholder="Ask about space..."
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && handleAsk()}
    />
  </div>
  <div className="col-md-3 d-grid">
    <button className="btn btn-outline-light" onClick={handleAsk}>
      Ask
    </button>
  </div>
</div>
  <div className="chat-box">
    {chat.map((msg, idx) => (
      <div key={idx} className={`alert ${msg.role === 'user' ? 'alert-secondary' : 'alert-primary'}`}>
        <strong>{msg.role === 'user' ? 'You' : 'Cosmos'}:</strong> {msg.text}
      </div>
    ))}
  </div>
</div>



  );
};

export default AskTheCosmos;
