'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  Box, 
  Typography, 
  LinearProgress, 
  IconButton, 
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import { 
  CloudUpload as UploadIcon,
  Delete as DeleteIcon,
  InsertDriveFile as FileIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface FileUploadProps {
  onUpload: (files: File[]) => Promise<void>;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  title?: string;
}

interface UploadingFile extends File {
  id: string;
  progress: number;
  error?: string;
}

const DropZone = styled(Paper)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: theme.palette.background.default,
  transition: 'border-color 0.2s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const FileList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export function FileUpload({ 
  onUpload, 
  accept, 
  maxFiles = 5, 
  maxSize = 5 * 1024 * 1024, // 5MB
  title = 'Drop files here or click to upload' 
}: FileUploadProps) {
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      progress: 0,
    }));

    setUploadingFiles(prev => [...prev, ...newFiles]);

    try {
      await onUpload(acceptedFiles);
      // Simulate progress
      newFiles.forEach(file => {
        const interval = setInterval(() => {
          setUploadingFiles(prev => 
            prev.map(f => 
              f.id === file.id
                ? { ...f, progress: Math.min(f.progress + 10, 100) }
                : f
            )
          );
        }, 200);

        setTimeout(() => {
          clearInterval(interval);
          setUploadingFiles(prev => prev.filter(f => f.id !== file.id));
        }, 2000);
      });
    } catch (error) {
      newFiles.forEach(file => {
        setUploadingFiles(prev =>
          prev.map(f =>
            f.id === file.id
              ? { ...f, error: 'Upload failed' }
              : f
          )
        );
      });
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
  });

  const removeFile = (fileId: string) => {
    setUploadingFiles(prev => prev.filter(f => f.id !== fileId));
  };

  return (
    <Box>
      <DropZone
        {...getRootProps()}
        sx={{
          borderColor: isDragActive ? 'primary.main' : 'divider',
        }}
      >
        <input {...getInputProps()} />
        <UploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Maximum file size: {maxSize / (1024 * 1024)}MB
        </Typography>
      </DropZone>

      {uploadingFiles.length > 0 && (
        <FileList>
          {uploadingFiles.map((file) => (
            <ListItem
              key={file.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeFile(file.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <FileIcon sx={{ mr: 2 }} />
              <ListItemText
                primary={file.name}
                secondary={
                  file.error ? (
                    <Typography color="error">{file.error}</Typography>
                  ) : (
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={file.progress} 
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  )
                }
              />
            </ListItem>
          ))}
        </FileList>
      )}
    </Box>
  );
}
