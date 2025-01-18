import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../components/ui/FileUpload/FileUpload';
import { Box } from '@mui/material';
import { Providers } from '@/lib/Providers';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof FileUpload>;

const mockUpload = async (files: File[]) => {
  // Simula um upload com delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Uploaded files:', files.map(f => f.name));
};

export const Basic: Story = {
  args: {
    onUpload: mockUpload,
    title: 'Drop files here or click to upload',
  },
};

export const WithFileTypes: Story = {
  args: {
    onUpload: mockUpload,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
    },
    title: 'Upload images or PDF files',
  },
};

export const WithMaxFiles: Story = {
  args: {
    onUpload: mockUpload,
    maxFiles: 3,
    title: 'Upload up to 3 files',
  },
};

export const WithMaxSize: Story = {
  args: {
    onUpload: mockUpload,
    maxSize: 1024 * 1024, // 1MB
    title: 'Max file size: 1MB',
  },
};

export const CustomStyling: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <FileUpload
        onUpload={mockUpload}
        title="📁 Drag and drop your files here"
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg'],
          'application/pdf': ['.pdf'],
          'application/msword': ['.doc', '.docx'],
        }}
        maxFiles={5}
        maxSize={5 * 1024 * 1024} // 5MB
      />
    </Box>
  ),
};

export const ErrorHandling: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <FileUpload
        onUpload={async (files) => {
          // Simula um erro no upload
          await new Promise((resolve) => setTimeout(resolve, 1000));
          throw new Error('Failed to upload files');
        }}
        title="This upload will fail"
        maxFiles={5}
        maxSize={5 * 1024 * 1024}
      />
    </Box>
  ),
};

export const DragAndDrop: Story = {
  render: () => (
    <Box 
      sx={{ 
        width: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
      }}
    >
      <FileUpload
        onUpload={mockUpload}
        title="Drop files anywhere in this area"
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg'],
          'application/pdf': ['.pdf'],
        }}
        maxFiles={10}
        maxSize={10 * 1024 * 1024} // 10MB
      />
    </Box>
  ),
};
