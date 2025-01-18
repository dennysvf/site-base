'use client';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Grow,
  Box,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Close as CloseIcon } from '@mui/icons-material';

export interface ModalProps {
  /**
   * If true, the modal is open
   */
  open: boolean;
  /**
   * Callback fired when the modal is closed
   */
  onClose: () => void;
  /**
   * The title of the modal
   */
  title?: React.ReactNode;
  /**
   * The content of the modal
   */
  children?: React.ReactNode;
  /**
   * The actions to be displayed at the bottom of the modal
   */
  actions?: React.ReactNode;
  /**
   * The maximum width of the modal
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /**
   * If true, the modal stretches to maxWidth
   */
  fullWidth?: boolean;
  /**
   * If true, the modal will be full-screen
   */
  fullScreen?: boolean;
  /**
   * If true, the close icon will be hidden
   */
  hideCloseIcon?: boolean;
  /**
   * If true, clicking the backdrop will not fire the onClose callback
   */
  disableBackdropClick?: boolean;
  /**
   * Custom class name for the modal
   */
  className?: string;
  /**
   * Custom class name for the content
   */
  contentClassName?: string;
  /**
   * Custom class name for the title
   */
  titleClassName?: string;
  /**
   * Custom class name for the actions
   */
  actionsClassName?: string;
  /**
   * Determine the scroll behavior of the modal
   */
  scroll?: 'paper' | 'body';
  /**
   * If true, the title will be centered
   */
  centerTitle?: boolean;
  /**
   * The transition effect to use
   */
  transition?: 'fade' | 'slide' | 'grow';
  /**
   * If true, the modal will have a divider between title and content
   */
  dividers?: boolean;
  /**
   * Custom styles for the modal content
   */
  contentSx?: object;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1, 2, 2),
  },
}));

const StyledDialogTitle = styled(DialogTitle)<{ $centerTitle?: boolean }>(({ theme, $centerTitle }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: $centerTitle ? 'center' : 'space-between',
  padding: theme.spacing(2),
  '& .MuiTypography-root': {
    fontSize: '1.125rem',
    fontWeight: 600,
  },
}));

const Transitions = {
  fade: Fade,
  slide: Slide,
  grow: Grow,
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      children,
      actions,
      maxWidth = 'sm',
      fullWidth = true,
      fullScreen = false,
      hideCloseIcon = false,
      disableBackdropClick = false,
      className,
      contentClassName,
      titleClassName,
      actionsClassName,
      scroll = 'paper',
      centerTitle = false,
      transition = 'fade',
      dividers = false,
      contentSx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const fullScreenBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const isFullScreen = fullScreen || fullScreenBreakpoint;

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disableBackdropClick) {
        event.stopPropagation();
      }
    };

    const TransitionComponent = Transitions[transition];

    return (
      <StyledDialog
        ref={ref}
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={isFullScreen}
        className={className}
        scroll={scroll}
        onClick={handleBackdropClick}
        TransitionComponent={TransitionComponent}
        {...props}
      >
        {title && (
          <StyledDialogTitle $centerTitle={centerTitle} className={titleClassName}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            {!hideCloseIcon && (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </StyledDialogTitle>
        )}
        <DialogContent
          className={contentClassName}
          dividers={dividers}
          sx={contentSx}
        >
          {children}
        </DialogContent>
        {actions && (
          <DialogActions className={actionsClassName}>
            {actions}
          </DialogActions>
        )}
      </StyledDialog>
    );
  }
);

Modal.displayName = 'Modal';
