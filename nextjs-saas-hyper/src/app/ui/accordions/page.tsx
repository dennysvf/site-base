'use client';

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Accordion } from '@/components/ui/Accordion';
import { PageContainer } from '@/components/ui/PageContainer';

const defaultAccordionItems = [
  {
    id: 'panel1',
    title: 'Accordion Item #1',
    content: (
      <>
        <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables.
      </>
    ),
  },
  {
    id: 'panel2',
    title: 'Accordion Item #2',
    content: (
      <>
        <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables.
      </>
    ),
  },
  {
    id: 'panel3',
    title: 'Accordion Item #3',
    content: (
      <>
        <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables.
      </>
    ),
  },
];

const customAccordionItems = [
  {
    id: 'custom1',
    title: 'Q. What is Lorem Ipsum?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'custom2',
    title: 'Q. Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 'custom3',
    title: 'Q. Where does it come from?',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
  },
];

export default function AccordionsPage() {
  return (
    <PageContainer title="Accordions" subtitle="Demonstração dos diferentes tipos de Accordions">
      <Grid container spacing={3}>
        {/* Default Accordion */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Default Accordions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Click the accordions below to expand/collapse the accordion content.
              </Typography>
              <Accordion items={defaultAccordionItems} defaultExpanded="panel1" />
            </CardContent>
          </Card>
        </Grid>

        {/* Flush Accordion */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Flush Accordion
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Add the flush variant to remove some borders and rounded corners.
              </Typography>
              <Accordion items={defaultAccordionItems} variant="flush" />
            </CardContent>
          </Card>
        </Grid>

        {/* Always Open Accordion */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Always Open Accordion
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                This accordion allows multiple items to stay open at the same time.
              </Typography>
              <Accordion items={defaultAccordionItems} allowMultiple />
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Accordion */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Accordion
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Custom styled accordion with different look and feel.
              </Typography>
              <Accordion items={customAccordionItems} variant="custom" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
