import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatWindow } from '@/components/ui/Chat/ChatWindow';
import { Box } from '@mui/material';

const meta = {
  title: 'UI/Communication/ChatWindow',
  component: ChatWindow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: 400, height: 600 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ChatWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMessages = [
  {
    id: '1',
    content: 'Hey there! How are you?',
    sender: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:00:00'),
    isOwn: false,
  },
  {
    id: '2',
    content: "I'm doing great, thanks! Just working on some new features.",
    sender: {
      id: '2',
      name: 'You',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:01:00'),
    isOwn: true,
  },
  {
    id: '3',
    content: 'That sounds interesting! Can you share some screenshots?',
    sender: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:02:00'),
    isOwn: false,
  },
  {
    id: '4',
    content: "Sure! Here's what I've been working on:",
    sender: {
      id: '2',
      name: 'You',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:03:00'),
    isOwn: true,
    attachments: [
      {
        id: 'a1',
        type: 'image',
        url: 'https://source.unsplash.com/random/800x600',
        name: 'screenshot.png',
        size: 1024 * 1024,
      },
    ],
  },
];

const markdownMessages = [
  {
    id: '1',
    content: '# Project Update\n\nHere are the key features we implemented:\n\n- User authentication\n- Real-time chat\n- File sharing\n\nNext steps are in the [project roadmap](https://example.com/roadmap).',
    sender: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:00:00'),
    isOwn: false,
  },
  {
    id: '2',
    content: '> Great progress! How about the code structure?\n\nHere\'s an example of our new component:\n\n```tsx\nfunction ChatMessage({ content, sender }) {\n  return (\n    <div className="message">\n      <Avatar src={sender.avatar} />\n      <div className="content">{content}</div>\n    </div>\n  );\n}\n```',
    sender: {
      id: '2',
      name: 'You',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:01:00'),
    isOwn: true,
  },
  {
    id: '3',
    content: 'We also updated the styling:\n\n| Component | Before | After |\n|-----------|---------|-------|\n| Button | 8px | 12px |\n| Card | 16px | 24px |\n| Input | 4px | 8px |',
    sender: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:02:00'),
    isOwn: false,
  },
  {
    id: '4',
    content: 'The new design looks **amazing**! Some key improvements:\n\n1. Better typography\n2. Consistent spacing\n3. *Enhanced* accessibility\n\nCheck out the [documentation](https://example.com/docs) for more details.',
    sender: {
      id: '2',
      name: 'You',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      status: 'online',
    },
    timestamp: new Date('2025-01-19T08:03:00'),
    isOwn: true,
  },
];

export const Basic: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
  },
};

export const WithMarkdown: Story = {
  args: {
    messages: markdownMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    enableMarkdown: true,
  },
};

export const WithTyping: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    showTyping: true,
    typingUsers: [{ id: '1', name: 'John Doe' }],
  },
};

export const WithSubtitle: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    title: 'Project Discussion',
    subtitle: '3 participants',
  },
};

export const WithReply: Story = {
  args: {
    messages: [
      ...mockMessages,
      {
        id: '5',
        content: 'Looks amazing! The design is really clean.',
        sender: {
          id: '1',
          name: 'John Doe',
          avatar: 'https://mui.com/static/images/avatar/1.jpg',
          status: 'online',
        },
        timestamp: new Date('2025-01-19T08:04:00'),
        isOwn: false,
        replyTo: mockMessages[3],
      },
    ],
    onSendMessage: (content) => console.log('Message sent:', content),
  },
};

export const WithError: Story = {
  args: {
    messages: [
      ...mockMessages,
      {
        id: '6',
        content: 'This message failed to send.',
        sender: {
          id: '2',
          name: 'You',
          avatar: 'https://mui.com/static/images/avatar/2.jpg',
          status: 'online',
        },
        timestamp: new Date('2025-01-19T08:05:00'),
        isOwn: true,
        status: 'error',
      },
    ],
    onSendMessage: (content) => console.log('Message sent:', content),
  },
};

export const Loading: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    loading: true,
  },
};

export const WithLoadMore: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    hasMore: true,
    onLoadMore: () => console.log('Loading more messages...'),
  },
};

export const WithMessageOptions: Story = {
  args: {
    messages: markdownMessages,
    onSendMessage: (content) => console.log('Message sent:', content),
    onEditMessage: (messageId, content) => console.log('Message edited:', messageId, content),
    onDeleteMessage: (messageId) => console.log('Message deleted:', messageId),
    showMessageOptions: true,
    enableMarkdown: true,
  },
};
