'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Paper,
  Typography,
  LinearProgress,
  Alert,
  Stack,
  CircularProgress,
  Zoom,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Stepper } from '../Stepper/Stepper';
import { motion, AnimatePresence } from 'framer-motion';

export interface FormStep {
  label: string;
  description?: string;
  component: React.ReactNode;
  optional?: boolean;
  validation?: (data: any) => Promise<boolean> | boolean;
  icon?: React.ReactNode;
  summary?: (data: any) => React.ReactNode;
  dependencies?: string[];
}

export interface FormWizardProps {
  steps: FormStep[];
  onComplete: (data: any) => void | Promise<void>;
  onCancel?: () => void;
  onStepChange?: (step: number, data: any) => void;
  initialData?: any;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'text' | 'dots' | 'progress';
  showStepDescription?: boolean;
  showNavigation?: boolean;
  showProgress?: boolean;
  submitButtonText?: string;
  backButtonText?: string;
  nextButtonText?: string;
  cancelButtonText?: string;
  loading?: boolean;
  error?: string;
  success?: string;
  autoValidate?: boolean;
  allowSkipOptional?: boolean;
  showSummary?: boolean;
  summaryPosition?: 'top' | 'bottom' | 'right';
  theme?: 'default' | 'outlined' | 'compact';
}

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'theme',
})<{ wizardTheme?: string }>(({ theme, wizardTheme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  ...(wizardTheme === 'outlined' && {
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
  }),
  ...(wizardTheme === 'compact' && {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  }),
}));

const NavigationButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    '& > .MuiStack-root': {
      width: '100%',
      flexDirection: 'column',
      '& > button': {
        width: '100%',
      },
    },
    '& > button': {
      width: '100%',
    },
  },
}));

const Progress = styled(LinearProgress)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  height: 8,
}));

const StepContent = styled(motion.div)({
  position: 'relative',
});

const Summary = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'position',
})<{ position: string }>(({ theme, position }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  ...(position === 'right' && {
    marginLeft: theme.spacing(2),
    width: 300,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing(2),
    },
  }),
  ...(position === 'top' && {
    marginBottom: theme.spacing(2),
  }),
  ...(position === 'bottom' && {
    marginTop: theme.spacing(2),
  }),
}));

export function FormWizard({
  steps,
  onComplete,
  onCancel,
  onStepChange,
  initialData = {},
  className,
  orientation = 'horizontal',
  variant = 'text',
  showStepDescription = true,
  showNavigation = true,
  showProgress = true,
  submitButtonText = 'Submit',
  backButtonText = 'Back',
  nextButtonText = 'Next',
  cancelButtonText = 'Cancel',
  loading = false,
  error: propError,
  success,
  autoValidate = false,
  allowSkipOptional = false,
  showSummary = false,
  summaryPosition = 'right',
  theme: wizardTheme = 'default',
}: FormWizardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(initialData);
  const [isValidating, setIsValidating] = React.useState(false);
  const [error, setError] = React.useState<string | null>(propError || null);
  const [completedSteps, setCompletedSteps] = React.useState<{[k: number]: boolean}>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isLastStep = activeStep === steps.length - 1;
  const currentStep = steps[activeStep];
  const progress = (Object.keys(completedSteps).length / steps.length) * 100;

  // Reset error when prop changes
  React.useEffect(() => {
    setError(propError || null);
  }, [propError]);

  // Auto-validate on data change if enabled
  React.useEffect(() => {
    if (autoValidate && currentStep.validation) {
      const timer = setTimeout(async () => {
        try {
          const isValid = await currentStep.validation(formData);
          if (!isValid) {
            setError('Please complete all required fields correctly.');
          } else {
            setError(null);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Validation failed');
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData, currentStep, autoValidate]);

  const validateStep = async () => {
    if (!currentStep.validation) return true;
    
    setIsValidating(true);
    try {
      const isValid = await currentStep.validation(formData);
      if (!isValid) {
        setError('Please complete all required fields correctly.');
        return false;
      }
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Validation failed');
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const handleNext = async () => {
    setError(null);
    
    if (!currentStep.optional || !allowSkipOptional) {
      const isValid = await validateStep();
      if (!isValid) return;
    }
    
    setCompletedSteps(prev => ({ ...prev, [activeStep]: true }));

    if (isLastStep) {
      setIsSubmitting(true);
      try {
        await onComplete(formData);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      onStepChange?.(nextStep, formData);
    }
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    onStepChange?.(prevStep, formData);
    setError(null);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const handleStepChange = (step: number) => {
    if (step < activeStep || completedSteps[step - 1] || (allowSkipOptional && steps[step].optional)) {
      setActiveStep(step);
      onStepChange?.(step, formData);
      setError(null);
    }
  };

  const updateFormData = (newData: any) => {
    setFormData((prev: any) => ({
      ...prev,
      ...newData,
    }));
  };

  const stepperSteps = steps.map((step, index) => ({
    label: step.label,
    description: showStepDescription ? step.description : undefined,
    optional: step.optional,
    completed: completedSteps[index],
    error: error && index === activeStep,
    icon: step.icon,
  }));

  const renderSummary = () => {
    if (!showSummary) return null;

    const summaryContent = (
      <Summary position={summaryPosition}>
        <Typography variant="h6" gutterBottom>
          Summary
        </Typography>
        {steps.map((step, index) => {
          if (!step.summary || !completedSteps[index]) return null;
          return (
            <Box key={index} mb={2}>
              <Typography variant="subtitle2" color="textSecondary">
                {step.label}
              </Typography>
              {step.summary(formData)}
            </Box>
          );
        })}
      </Summary>
    );

    // Em dispositivos móveis, sempre mostra o sumário abaixo
    if (isMobile) {
      return (
        <>
          {renderMainContent()}
          <Fade in>{summaryContent}</Fade>
        </>
      );
    }

    // Em desktop, mantém o layout conforme a posição escolhida
    if (summaryPosition === 'right') {
      return (
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>{renderMainContent()}</Box>
          <Fade in>{summaryContent}</Fade>
        </Box>
      );
    }

    return (
      <>
        {summaryPosition === 'top' && <Fade in>{summaryContent}</Fade>}
        {renderMainContent()}
        {summaryPosition === 'bottom' && <Fade in>{summaryContent}</Fade>}
      </>
    );
  };

  const renderMainContent = () => (
    <>
      <Stepper
        steps={stepperSteps}
        activeStep={activeStep}
        onChange={handleStepChange}
        orientation={orientation}
        variant={variant}
        showButtons={false}
      />

      {showProgress && (
        <Progress
          variant="determinate"
          value={progress}
          color="primary"
        />
      )}

      <AnimatePresence mode="wait">
        {(error || success) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mt: 2 }}>
                {success}
              </Alert>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Box mt={3}>
        <AnimatePresence mode="wait">
          <StepContent
            key={activeStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {React.isValidElement(currentStep.component)
              ? React.cloneElement(currentStep.component as React.ReactElement, {
                  formData,
                  updateFormData,
                  isLastStep,
                })
              : currentStep.component}
          </StepContent>
        </AnimatePresence>
      </Box>

      {showNavigation && (
        <NavigationButtons>
          <Stack direction="row" spacing={1}>
            {onCancel && (
              <Button
                onClick={handleCancel}
                disabled={isValidating || loading || isSubmitting}
              >
                {cancelButtonText}
              </Button>
            )}
            <Button
              onClick={handleBack}
              disabled={activeStep === 0 || isValidating || loading || isSubmitting}
            >
              {backButtonText}
            </Button>
          </Stack>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={isValidating || loading || isSubmitting}
            endIcon={
              (isValidating || loading || isSubmitting) && (
                <CircularProgress size={20} color="inherit" />
              )
            }
          >
            {isLastStep ? submitButtonText : nextButtonText}
          </Button>
        </NavigationButtons>
      )}
    </>
  );

  return (
    <StyledPaper className={className} elevation={1} wizardTheme={wizardTheme}>
      {renderSummary()}
    </StyledPaper>
  );
}
