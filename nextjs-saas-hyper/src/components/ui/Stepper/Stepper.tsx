'use client';

import React from 'react';
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  Button,
  Paper,
  Box,
  Typography,
  styled,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export interface StepItem {
  label: string;
  description?: string;
  content?: React.ReactNode;
  optional?: boolean;
  error?: boolean;
  completed?: boolean;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep?: number;
  onChange?: (step: number) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'text' | 'dots' | 'progress';
  alternativeLabel?: boolean;
  showButtons?: boolean;
  linear?: boolean;
  className?: string;
}

const StyledStepper = styled(MuiStepper)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    '& .MuiStepLabel-iconContainer': {
      '& .MuiSvgIcon-root': {
        width: 28,
        height: 28,
      },
    },
    '& .MuiStepLabel-labelContainer': {
      '& .MuiStepLabel-label': {
        marginTop: theme.spacing(0.5),
      },
      '& .MuiStepLabel-optional': {
        marginTop: theme.spacing(0.5),
        color: theme.palette.text.secondary,
      },
    },
  },
  '& .MuiStepContent-root': {
    borderLeft: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(1.75),
    paddingLeft: theme.spacing(2.5),
  },
}));

const StepButtons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > button': {
    marginRight: theme.spacing(1),
  },
}));

export function Stepper({
  steps,
  activeStep = 0,
  onChange,
  orientation = 'horizontal',
  variant = 'text',
  alternativeLabel = false,
  showButtons = true,
  linear = true,
  className,
}: StepperProps) {
  const [currentStep, setCurrentStep] = React.useState(activeStep);

  React.useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    onChange?.(nextStep);
  };

  const handleBack = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    onChange?.(prevStep);
  };

  const handleStep = (step: number) => {
    if (!linear || step < currentStep) {
      setCurrentStep(step);
      onChange?.(step);
    }
  };

  const renderStepIcon = (props: { active: boolean; completed: boolean; error: boolean }) => {
    const { active, completed, error } = props;

    if (error) {
      return <ErrorIcon color="error" />;
    }

    if (completed) {
      return <CheckCircleIcon color="primary" />;
    }

    if (active) {
      return <RadioButtonUncheckedIcon color="primary" />;
    }

    return <RadioButtonUncheckedIcon />;
  };

  return (
    <Paper elevation={0}>
      <StyledStepper
        activeStep={currentStep}
        orientation={orientation}
        alternativeLabel={alternativeLabel}
        nonLinear={!linear}
        className={className}
      >
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean; error?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (step.optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (step.error) {
            stepProps.error = true;
          }

          if (step.completed) {
            stepProps.completed = true;
          }

          const StepComponent = linear ? Step : StepButton;

          return (
            <StepComponent
              key={step.label}
              {...stepProps}
              onClick={linear ? undefined : () => handleStep(index)}
            >
              <StepLabel
                StepIconComponent={renderStepIcon}
                optional={labelProps.optional}
              >
                {step.label}
                {step.description && (
                  <Typography variant="caption" display="block" color="text.secondary">
                    {step.description}
                  </Typography>
                )}
              </StepLabel>
              {orientation === 'vertical' && step.content && (
                <StepContent>
                  {step.content}
                  {showButtons && (
                    <StepButtons>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                      >
                        {currentStep === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={currentStep === 0}
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                    </StepButtons>
                  )}
                </StepContent>
              )}
            </StepComponent>
          );
        })}
      </StyledStepper>
      {orientation === 'horizontal' && showButtons && (
        <StepButtons>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Continue'}
          </Button>
          <Button
            disabled={currentStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
        </StepButtons>
      )}
    </Paper>
  );
}
