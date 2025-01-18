'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  TextField, 
  IconButton, 
  Typography, 
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: Date;
  isOwn?: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  title?: string;
  height?: number | string;
}

const ChatContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const MessageList = styled(List)(({ theme }) => ({
  flex: 1,
  overflow: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOwn',
})<{ isOwn?: boolean }>(({ theme, isOwn }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  borderRadius: 12,
  backgroundColor: isOwn ? theme.palette.primary.main : theme.palette.grey[100],
  color: isOwn ? theme.palette.primary.contrastText : theme.palette.text.primary,
  alignSelf: isOwn ? 'flex-end' : 'flex-start',
  position: 'relative',
  wordBreak: 'break-word',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(1),
}));

export function ChatWindow({ messages, onSendMessage, title = 'Chat', height = 500 }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatContainer sx={{ height }}>
      {title && (
        <>
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </>
      )}
      
      <MessageList>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            sx={{
              flexDirection: 'column',
              alignItems: message.isOwn ? 'flex-end' : 'flex-start',
              padding: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              {!message.isOwn && (
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Avatar
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemAvatar>
              )}
              <Typography variant="caption" color="textSecondary">
                {message.sender.name} • {new Date(message.timestamp).toLocaleTimeString()}
              </Typography>
            </Box>
            <MessageBubble isOwn={message.isOwn}>
              <Typography variant="body2">{message.content}</Typography>
            </MessageBubble>
          </ListItem>
        ))}
        <div ref={messagesEndRef} />
      </MessageList>

      <InputContainer>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
        />
        <IconButton 
          color="primary" 
          onClick={handleSend}
          disabled={!newMessage.trim()}
        >
          <SendIcon />
        </IconButton>
      </InputContainer>
    </ChatContainer>
  );
}
