'use client';

import { PageContainer } from '@/components/ui/PageContainer';
import { BasicTable } from '@/components/ui/tables/BasicTable';
import { StripedTable } from '@/components/ui/tables/StripedTable';
import { BorderedTable } from '@/components/ui/tables/BorderedTable';
import { Grid } from '@mui/material';

const basicTableData = {
  columns: ['Name', 'Phone Number', 'Date of Birth', 'Active?'],
  rows: [
    ['Risa D. Pearson', '336-508-2157', 'July 24, 1950', true],
    ['Ann C. Thompson', '646-473-2057', 'January 25, 1959', true],
    ['Paul J. Friend', '281-308-0793', 'September 1, 1939', false],
    ['Linda G. Smith', '606-253-1207', 'May 3, 1962', false],
  ],
};

const stripedTableData = {
  columns: ['User', 'Account No.', 'Balance', 'Action'],
  rows: [
    {
      user: { name: 'Risa D. Pearson', avatar: '/assets/images/users/avatar-2.jpg' },
      accountNo: '#AC336 508',
      balance: '$21,356',
      action: 'View',
    },
    {
      user: { name: 'Margaret D. Evans', avatar: '/assets/images/users/avatar-3.jpg' },
      accountNo: '#AC336 756',
      balance: '$24,568',
      action: 'View',
    },
    {
      user: { name: 'Bryan J. Luellen', avatar: '/assets/images/users/avatar-4.jpg' },
      accountNo: '#AC336 098',
      balance: '$30,065',
      action: 'View',
    },
  ],
};

const borderedTableData = {
  columns: ['User', 'Account No.', 'Balance', 'Action'],
  rows: stripedTableData.rows,
};

export default function TablesBasicPage() {
  return (
    <PageContainer title="Basic Tables" description="Exemplos de tabelas básicas usando Material UI">
      <Grid container spacing={3}>
        <Grid item xl={6}>
          <BasicTable
            title="Basic example"
            description="For basic styling—light padding and only horizontal dividers"
            columns={basicTableData.columns}
            rows={basicTableData.rows}
          />
        </Grid>

        <Grid item xl={6}>
          <StripedTable
            title="Striped rows"
            description="Use zebra-striping to any table row within the table body"
            columns={stripedTableData.columns}
            rows={stripedTableData.rows}
          />
        </Grid>

        <Grid item xl={6}>
          <BorderedTable
            title="Bordered table"
            description="Add borders on all sides of the table and cells"
            columns={borderedTableData.columns}
            rows={borderedTableData.rows}
            variant="primary"
          />
        </Grid>

        <Grid item xl={6}>
          <BorderedTable
            title="Bordered color table"
            description="Add borders with custom colors to the table"
            columns={borderedTableData.columns}
            rows={borderedTableData.rows}
            variant="success"
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
