import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@/components/ui/Stepper/Stepper';

const meta = {
  title: 'UI/Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  {
    label: 'Select campaign settings',
    description: 'Choose your campaign preferences',
    content: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.',
  },
  {
    label: 'Create an ad group',
    description: 'Create a group of related ads',
    content: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: 'Design your advertisement',
    content: 'Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they\'re running and how to resolve approval issues.',
  },
];

export const Horizontal: Story = {
  args: {
    steps,
    orientation: 'horizontal',
    showButtons: true,
  },
};

export const Vertical: Story = {
  args: {
    steps,
    orientation: 'vertical',
    showButtons: true,
  },
};

export const NonLinear: Story = {
  args: {
    steps,
    linear: false,
    showButtons: false,
  },
};

export const WithOptionalStep: Story = {
  args: {
    steps: [
      ...steps.slice(0, 1),
      { ...steps[1], optional: true },
      ...steps.slice(2),
    ],
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { ...steps[0], completed: true },
      { ...steps[1], error: true },
      ...steps.slice(2),
    ],
    activeStep: 1,
  },
};

export const AlternativeLabel: Story = {
  args: {
    steps,
    alternativeLabel: true,
  },
};
