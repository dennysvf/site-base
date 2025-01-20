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
  Divider,
  Badge,
  Menu,
  MenuItem,
  CircularProgress,
  Button,
  Tooltip,
  Fade,
  Tab,
  Tabs,
} from '@mui/material';
import { 
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon,
  MoreVert as MoreIcon,
  Image as ImageIcon,
  Description as FileIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Reply as ReplyIcon,
  ContentCopy as CopyIcon,
  Visibility as PreviewIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.paper,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.divider,
    borderRadius: '3px',
  },
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => !['isOwn', 'status'].includes(prop as string),
})<{ isOwn?: boolean; status?: Message['status'] }>(({ theme, isOwn, status }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1.5),
  borderRadius: 12,
  backgroundColor: isOwn ? theme.palette.primary.main : theme.palette.grey[100],
  color: isOwn ? theme.palette.primary.contrastText : theme.palette.text.primary,
  alignSelf: isOwn ? 'flex-end' : 'flex-start',
  position: 'relative',
  wordBreak: 'break-word',
  '&:hover': {
    '& .message-options': {
      opacity: 1,
    },
  },
  ...(status === 'error' && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4,
      right: -4,
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: theme.palette.error.main,
    },
  }),
}));

const ReplyPreview = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const AttachmentPreview = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
}));

const StatusIndicator = styled('span')<{ status: string }>(({ theme, status }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 
    status === 'online' ? theme.palette.success.main :
    status === 'away' ? theme.palette.warning.main :
    theme.palette.grey[500],
}));

const MarkdownContent = styled(Box)(({ theme }) => ({
  '& p': {
    margin: 0,
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& code': {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(0.25, 0.5),
    borderRadius: theme.shape.borderRadius,
    fontSize: '0.875em',
  },
  '& pre': {
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    overflow: 'auto',
  },
  '& img': {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  '& blockquote': {
    margin: theme.spacing(1, 0),
    paddingLeft: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.divider}`,
    color: theme.palette.text.secondary,
  },
  '& ul, & ol': {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2.5),
  },
  '& table': {
    borderCollapse: 'collapse',
    width: '100%',
    margin: theme.spacing(1, 0),
    '& th, & td': {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(0.5, 1),
    },
    '& th': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away';
  };
  timestamp: Date;
  isOwn?: boolean;
  attachments?: Array<{
    id: string;
    type: 'image' | 'file';
    url: string;
    name: string;
    size?: number;
  }>;
  status?: 'sending' | 'sent' | 'delivered' | 'read' | 'error';
  replyTo?: Message;
  edited?: boolean;
}

export interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (content: string, attachments?: File[], replyToMessage?: Message) => void;
  onEditMessage?: (messageId: string, newContent: string) => void;
  onDeleteMessage?: (messageId: string) => void;
  title?: string;
  subtitle?: string;
  height?: number | string;
  loading?: boolean;
  showTyping?: boolean;
  typingUsers?: Array<{ id: string; name: string }>;
  onLoadMore?: () => void;
  hasMore?: boolean;
  className?: string;
  maxAttachmentSize?: number;
  allowedFileTypes?: string[];
  showMessageOptions?: boolean;
  enableMarkdown?: boolean;
}

export function ChatWindow({ 
  messages,
  onSendMessage,
  onEditMessage,
  onDeleteMessage,
  title = 'Chat',
  subtitle,
  height = 500,
  loading = false,
  showTyping = false,
  typingUsers = [],
  onLoadMore,
  hasMore = false,
  className,
  maxAttachmentSize = 5 * 1024 * 1024,
  allowedFileTypes = ['image/*', 'application/pdf'],
  showMessageOptions = true,
  enableMarkdown = true,
}: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
    messageId: string;
  } | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (!loading) {
      scrollToBottom();
    }
  }, [messages, loading]);

  const handleScroll = () => {
    if (listRef.current && onLoadMore && hasMore && !loading) {
      const { scrollTop } = listRef.current;
      if (scrollTop === 0) {
        onLoadMore();
      }
    }
  };

  const handleSend = () => {
    if (newMessage.trim() || attachments.length > 0) {
      onSendMessage(newMessage, attachments, replyTo || undefined);
      setNewMessage('');
      setAttachments([]);
      setReplyTo(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = allowedFileTypes.some(type => {
        if (type.endsWith('/*')) {
          return file.type.startsWith(type.replace('/*', ''));
        }
        return file.type === type;
      });
      const isValidSize = file.size <= maxAttachmentSize;
      return isValidType && isValidSize;
    });

    setAttachments(prev => [...prev, ...validFiles]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleMessageAction = (action: 'reply' | 'edit' | 'delete' | 'copy', message: Message) => {
    setContextMenu(null);
    
    switch (action) {
      case 'reply':
        setReplyTo(message);
        break;
      case 'edit':
        if (onEditMessage) {
          setEditingMessage(message);
          setNewMessage(message.content);
        }
        break;
      case 'delete':
        if (onDeleteMessage) {
          onDeleteMessage(message.id);
        }
        break;
      case 'copy':
        navigator.clipboard.writeText(message.content);
        break;
    }
  };

  const renderAttachment = (attachment: Message['attachments'][0]) => {
    if (attachment.type === 'image') {
      return (
        <Box
          component="img"
          src={attachment.url}
          alt={attachment.name}
          sx={{
            maxWidth: '100%',
            maxHeight: 200,
            borderRadius: 1,
            objectFit: 'cover',
          }}
        />
      );
    }
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          p: 1,
          bgcolor: 'action.hover',
          borderRadius: 1,
        }}
      >
        <FileIcon />
        <Typography variant="body2" noWrap>
          {attachment.name}
        </Typography>
        {attachment.size && (
          <Typography variant="caption" color="text.secondary">
            ({Math.round(attachment.size / 1024)}KB)
          </Typography>
        )}
      </Box>
    );
  };

  const renderMessageContent = (content: string) => {
    if (!enableMarkdown) {
      return <Typography variant="body2">{content}</Typography>;
    }

    return (
      <MarkdownContent>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={materialDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </MarkdownContent>
    );
  };

  return (
    <ChatContainer sx={{ height }} className={className}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6">{title}</Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>
      
      <MessageList ref={listRef} onScroll={handleScroll}>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
        
        {hasMore && !loading && (
          <Button onClick={onLoadMore} sx={{ alignSelf: 'center', mb: 2 }}>
            Load More
          </Button>
        )}

        {messages.map((message) => (
          <ListItem
            key={message.id}
            sx={{
              flexDirection: 'column',
              alignItems: message.isOwn ? 'flex-end' : 'flex-start',
              padding: 0,
            }}
          >
            {message.replyTo && (
              <ReplyPreview>
                <Typography variant="caption" color="text.secondary">
                  Reply to {message.replyTo.sender.name}
                </Typography>
                <Typography variant="body2" noWrap>
                  {message.replyTo.content}
                </Typography>
              </ReplyPreview>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              {!message.isOwn && (
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: message.sender.status === 'online' ? 'success.main' : 'grey.500',
                      },
                    }}
                  >
                    <Avatar
                      src={message.sender.avatar}
                      alt={message.sender.name}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Badge>
                </ListItemAvatar>
              )}
              <Typography variant="caption" color="textSecondary">
                {message.sender.name} • {new Date(message.timestamp).toLocaleTimeString()}
                {message.edited && ' (edited)'}
              </Typography>
            </Box>

            <Box sx={{ position: 'relative' }}>
              <MessageBubble isOwn={message.isOwn} status={message.status}>
                {renderMessageContent(message.content)}
                {message.attachments?.map((attachment, index) => (
                  <Box key={attachment.id} sx={{ mt: 1 }}>
                    {renderAttachment(attachment)}
                  </Box>
                ))}
                
                {showMessageOptions && (
                  <Fade in>
                    <Box
                      className="message-options"
                      sx={{
                        position: 'absolute',
                        top: -16,
                        right: message.isOwn ? 0 : 'auto',
                        left: message.isOwn ? 'auto' : 0,
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        bgcolor: 'background.paper',
                        borderRadius: 8,
                        boxShadow: 1,
                        display: 'flex',
                      }}
                    >
                      <Tooltip title="Reply">
                        <IconButton size="small" onClick={() => handleMessageAction('reply', message)}>
                          <ReplyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      {message.isOwn && onEditMessage && (
                        <Tooltip title="Edit">
                          <IconButton size="small" onClick={() => handleMessageAction('edit', message)}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                      {message.isOwn && onDeleteMessage && (
                        <Tooltip title="Delete">
                          <IconButton size="small" onClick={() => handleMessageAction('delete', message)}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                      <Tooltip title="Copy">
                        <IconButton size="small" onClick={() => handleMessageAction('copy', message)}>
                          <CopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Fade>
                )}
              </MessageBubble>

              {message.status === 'error' && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                  Failed to send. Click to retry.
                </Typography>
              )}
            </Box>
          </ListItem>
        ))}

        {showTyping && typingUsers.length > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
            <CircularProgress size={16} />
            <Typography variant="caption" color="text.secondary">
              {typingUsers.map(user => user.name).join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </Typography>
          </Box>
        )}

        <div ref={messagesEndRef} />
      </MessageList>

      <InputContainer>
        {replyTo && (
          <ReplyPreview>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                Replying to {replyTo.sender.name}
              </Typography>
              <IconButton size="small" onClick={() => setReplyTo(null)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="body2" noWrap>
              {replyTo.content}
            </Typography>
          </ReplyPreview>
        )}

        {attachments.length > 0 && (
          <AttachmentPreview>
            {attachments.map((file, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {file.type.startsWith('image/') ? <ImageIcon /> : <FileIcon />}
                <Typography variant="caption" noWrap>
                  {file.name}
                </Typography>
                <IconButton size="small" onClick={() => handleRemoveAttachment(index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </AttachmentPreview>
        )}

        {enableMarkdown && showPreview && newMessage && (
          <Box
            sx={{
              p: 2,
              bgcolor: 'action.hover',
              borderRadius: 1,
              mb: 2,
            }}
          >
            {renderMessageContent(newMessage)}
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={editingMessage ? 'Edit message...' : enableMarkdown ? 'Type a message using Markdown...' : 'Type a message...'}
            variant="outlined"
            size="small"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
              multiple
              accept={allowedFileTypes.join(',')}
            />
            <IconButton
              onClick={() => fileInputRef.current?.click()}
              disabled={attachments.length >= 5}
              size="small"
            >
              <AttachFileIcon />
            </IconButton>
            {enableMarkdown && (
              <Tooltip title={showPreview ? 'Hide Preview' : 'Show Preview'}>
                <IconButton
                  onClick={() => setShowPreview(!showPreview)}
                  color={showPreview ? 'primary' : 'default'}
                  size="small"
                >
                  <PreviewIcon />
                </IconButton>
              </Tooltip>
            )}
            <IconButton 
              color="primary"
              onClick={handleSend}
              disabled={!newMessage.trim() && attachments.length === 0}
              size="small"
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>

        {enableMarkdown && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            Supports Markdown: **bold**, *italic*, `code`, ```code blocks```, > quotes, - lists, [links](url), and more
          </Typography>
        )}
      </InputContainer>
    </ChatContainer>
  );
}
