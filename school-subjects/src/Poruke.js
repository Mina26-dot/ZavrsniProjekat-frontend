
import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import './Poruke.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ to: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  const handleSendMessage = () => {
    if (newMessage.to && newMessage.content) {
      setMessages([...messages, { id: messages.length + 1, from: 'Ucenik', to: newMessage.to, content: newMessage.content }]);
      setNewMessage({ to: '', content: '' });
    }
  };

  return (
    <Container className="messages-container">
      <Typography variant="h4" gutterBottom>
        Interni Sistem Poruka
      </Typography>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item">
            <Typography><strong>{msg.from}</strong> to <strong>{msg.to}</strong>: {msg.content}</Typography>
          </div>
        ))}
      </div>
      <div className="new-message-form">
        <TextField
          name="to"
          label="Primalac"
          fullWidth
          value={newMessage.to}
          onChange={handleInputChange}
          required
          className="message-input"
        />
        <TextField
          name="content"
          label="Poruka"
          fullWidth
          multiline
          rows={4}
          value={newMessage.content}
          onChange={handleInputChange}
          required
          className="message-input"
        />
        <Button
          variant="contained"
          color="customPurple"
          onClick={handleSendMessage}
          className="message-button"
        >
          Posalji Poruku
        </Button>
      </div>
    </Container>
  );
};

export default Messages;