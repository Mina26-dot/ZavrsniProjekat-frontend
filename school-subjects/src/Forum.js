
import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import './Forum.css';

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({ title: '' });
  const [newComment, setNewComment] = useState({ topicId: null, comment: '' });

  const handleTopicChange = (e) => {
    setNewTopic({ title: e.target.value });
  };

  const handleCommentChange = (e) => {
    setNewComment({ ...newComment, comment: e.target.value });
  };

  const handleAddTopic = () => {
    if (newTopic.title) {
      setTopics([...topics, { id: topics.length + 1, title: newTopic.title, comments: [] }]);
      setNewTopic({ title: '' });
    }
  };

  const handleAddComment = (topicId) => {
    if (newComment.comment) {
      const updatedTopics = topics.map(topic => 
        topic.id === topicId
          ? { ...topic, comments: [...topic.comments, newComment.comment] }
          : topic
      );
      setTopics(updatedTopics);
      setNewComment({ topicId: null, comment: '' });
    }
  };

  return (
    <Container className="forum-container">
      <Typography variant="h4" gutterBottom>
        Forum za Diskusiju
      </Typography>
      <div className="forum-list">
        {topics.map((topic) => (
          <div key={topic.id} className="forum-topic">
            <Typography variant="h6" className="forum-topic-title">{topic.title}</Typography>
            <div className="forum-comments">
              {topic.comments.map((comment, index) => (
                <Typography key={index} className="forum-comment">
                  &#8226; {comment}
                </Typography>
              ))}
            </div>
            <TextField
              name="comment"
              label="Dodaj komentar"
              fullWidth
              multiline
              rows={2}
              value={newComment.topicId === topic.id ? newComment.comment : ''}
              onChange={handleCommentChange}
            />
            <Button
              variant="contained"
              color="customPurple"
              onClick={() => handleAddComment(topic.id)}
              className="forum-button"
            >
              Dodaj Komentar
            </Button>
          </div>
        ))}
      </div>
      <div className="new-topic-form">
        <TextField
          name="title"
          label="Nova Tema"
          fullWidth
          value={newTopic.title}
          onChange={handleTopicChange}
          required
        />
        <Button
          variant="contained"
          color="customPurple"
          onClick={handleAddTopic}
          className="forum-button"
        >
          Dodaj Temu
        </Button>
      </div>
    </Container>
  );
};

export default Forum;