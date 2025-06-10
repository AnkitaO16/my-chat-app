import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{ role: string; message: string }[]>([]);

  const sendMessage = async () => {
    setChat([...chat, { role: 'user', message: input }]);
    const res = await axios.post('http://localhost:5000/api/message', {
      message: input,
    });
    setChat([...chat, { role: 'user', message: input }, { role: 'ai', message: res.data.response }]);
    setInput('');
  };

  return (
    <div style={{ padding: '2rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <h1> Chat </h1>
      <div>
        {chat.map((c, i) => (
          <p key={i}><strong>{c.role}:</strong> {c.message}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
