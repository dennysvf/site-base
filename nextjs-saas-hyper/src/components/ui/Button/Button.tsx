'use client';

import { forwardRef, ReactNode } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  CircularProgress,
  styled,
  Theme,
  useTheme,
} from '@mui/material';

type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
type ButtonVariant = 'text' | 'outlined' | 'contained' | 'soft';

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant'> {
  /**
   * The color of the button
   */
  color?: ButtonColor;
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
  /**
   * If true, the button will show a loading spinner
   */
  loading?: boolean;
  /**
   * The text to show next to the loading spinner
   */
  loadingText?: string;
  /**
   * The position of the loading spinner
   */
  loadingPosition?: 'start' | 'end' | 'center';
  /**
   * If true, the button will have rounded corners
   */
  rounded?: boolean;
  /**
   * If true, the button will only show an icon
   */
  iconOnly?: boolean;
  /**
   * Icon element to be displayed
   */
  icon?: ReactNode;
  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
}

interface StyledButtonProps {
  $color?: ButtonColor;
  $variant?: ButtonVariant;
  $rounded?: boolean;
}

const getColorStyles = (theme: Theme, props: StyledButtonProps) => {
  const color = props.$color || 'primary';
  const variant = props.$variant || 'contained';

  const colors = {
    primary: theme.palette.primary,
    secondary: theme.palette.secondary,
    success: theme.palette.success,
    error: theme.palette.error,
    warning: theme.palette.warning,
    info: theme.palette.info,
  };

  const selectedColor = colors[color];

  if (variant === 'contained') {
    return {
      backgroundColor: selectedColor.main,
      color: selectedColor.contrastText,
      '&:hover': {
        backgroundColor: selectedColor.dark,
      },
    };
  }

  if (variant === 'outlined') {
    return {
      color: selectedColor.main,
      borderColor: selectedColor.main,
      '&:hover': {
        borderColor: selectedColor.dark,
        backgroundColor: `${selectedColor.main}10`,
      },
    };
  }

  if (variant === 'soft') {
    return {
      backgroundColor: selectedColor.light,
      color: selectedColor.main,
      '&:hover': {
        backgroundColor: selectedColor.main,
        color: selectedColor.contrastText,
      },
    };
  }

  // text variant
  return {
    color: selectedColor.main,
    '&:hover': {
      backgroundColor: `${selectedColor.main}10`,
    },
  };
};

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['$rounded', '$color', '$variant'].includes(prop as string),
})<StyledButtonProps>(({ theme, $rounded, ...props }) => ({
  ...getColorStyles(theme, props),
  textTransform: 'none',
  borderRadius: $rounded ? '50px' : '0.5rem',
  fontWeight: 500,
}));

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'primary',
      variant = 'contained',
      loading = false,
      loadingText,
      loadingPosition = 'center',
      rounded = false,
      iconOnly = false,
      icon,
      disabled = false,
      fullWidth = false,
      size = 'medium',
      ...props
    },
    ref
  ) => {
    const buttonVariant = variant === 'soft' ? 'contained' : variant;

    const buttonIcon = icon && (
      <span className={iconOnly ? undefined : loadingPosition === 'end' ? 'ml-2' : 'mr-2'}>
        {icon}
      </span>
    );

    const loadingIcon = loading && (
      <CircularProgress
        size={24}
        sx={{
          position: loadingPosition === 'center' ? 'absolute' : 'static',
          ml: loadingPosition === 'end' ? 1 : 0,
          mr: loadingPosition === 'start' ? 1 : 0,
        }}
      />
    );

    return (
      <StyledButton
        ref={ref}
        $color={color}
        $variant={variant}
        $rounded={rounded}
        variant={buttonVariant}
        disabled={disabled || loading}
        fullWidth={fullWidth}
        size={size}
        {...props}
      >
        {loadingPosition === 'start' && loadingIcon}
        {loadingPosition === 'start' && buttonIcon}
        {iconOnly ? buttonIcon : children}
        {loadingPosition === 'end' && buttonIcon}
        {loadingPosition === 'end' && loadingIcon}
        {loadingPosition === 'center' && loading && (loadingText || <CircularProgress size={24} />)}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export interface ButtonGroupProps extends Omit<MuiButtonGroupProps, 'color' | 'variant'> {
  /**
   * The color of the button group
   */
  color?: ButtonColor;
  /**
   * The variant of the button group
   */
  variant?: Exclude<ButtonVariant, 'soft'>;
  /**
   * The size of the button group
   */
  size?: 'small' | 'medium' | 'large';
}

interface StyledButtonGroupProps {
  $color?: ButtonColor;
  $variant?: Exclude<ButtonVariant, 'soft'>;
}

const getButtonGroupColorStyles = (theme: Theme, props: StyledButtonGroupProps) => {
  const color = props.$color || 'primary';
  const variant = props.$variant || 'contained';

  const colors = {
    primary: theme.palette.primary,
    secondary: theme.palette.secondary,
    success: theme.palette.success,
    error: theme.palette.error,
    warning: theme.palette.warning,
    info: theme.palette.info,
  };

  const selectedColor = colors[color];

  if (variant === 'contained') {
    return {
      '& .MuiButton-root': {
        backgroundColor: selectedColor.main,
        color: selectedColor.contrastText,
        '&:hover': {
          backgroundColor: selectedColor.dark,
        },
      },
    };
  }

  if (variant === 'outlined') {
    return {
      '& .MuiButton-root': {
        color: selectedColor.main,
        borderColor: selectedColor.main,
        '&:hover': {
          borderColor: selectedColor.dark,
          backgroundColor: `${selectedColor.main}10`,
        },
      },
    };
  }

  // text variant
  return {
    '& .MuiButton-root': {
      color: selectedColor.main,
      '&:hover': {
        backgroundColor: `${selectedColor.main}10`,
      },
    },
  };
};

const StyledButtonGroup = styled(MuiButtonGroup, {
  shouldForwardProp: (prop) => !['$color', '$variant'].includes(prop as string),
})<StyledButtonGroupProps>(({ theme, ...props }) => ({
  ...getButtonGroupColorStyles(theme, props),
  '& .MuiButton-root': {
    textTransform: 'none',
    borderRadius: 0,
    fontWeight: 500,
    '&:first-of-type': {
      borderTopLeftRadius: '0.5rem',
      borderBottomLeftRadius: '0.5rem',
    },
    '&:last-of-type': {
      borderTopRightRadius: '0.5rem',
      borderBottomRightRadius: '0.5rem',
    },
  },
}));

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { children, ...other } = props;

  return (
    <StyledButtonGroup ref={ref} {...other}>
      {children}
    </StyledButtonGroup>
  );
});