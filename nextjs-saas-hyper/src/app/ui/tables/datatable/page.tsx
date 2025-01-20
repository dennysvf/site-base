'use client';

import { PageContainer } from '@/components/ui/PageContainer';
import { BasicDataTable } from '@/components/ui/tables/datatable/BasicDataTable';
import { ButtonsDataTable } from '@/components/ui/tables/datatable/ButtonsDataTable';
import { SelectionDataTable } from '@/components/ui/tables/datatable/SelectionDataTable';
import { ScrollableDataTable } from '@/components/ui/tables/datatable/ScrollableDataTable';
import { FixedColumnsTable } from '@/components/ui/tables/datatable/FixedColumnsTable';
import { Grid } from '@mui/material';

const employeesData = [
  {
    id: 1,
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    age: 61,
    startDate: '2011/04/25',
    salary: '$320,800',
  },
  {
    id: 2,
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
  },
  // ... mais dados podem ser adicionados aqui
];

export default function DataTablePage() {
  return (
    <PageContainer title="Data Tables" description="Exemplos de tabelas de dados avançadas">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicDataTable
            title="Basic Data Table"
            description="DataGrid com recursos básicos como ordenação, filtro e paginação"
            data={employeesData}
          />
        </Grid>

        <Grid item xs={12}>
          <ButtonsDataTable
            title="Buttons Data Table"
            description="DataGrid com botões de exportação e personalização"
            data={employeesData}
          />
        </Grid>

        <Grid item xs={12}>
          <SelectionDataTable
            title="Selection Data Table"
            description="DataGrid com seleção múltipla de linhas"
            data={employeesData}
          />
        </Grid>

        <Grid item xs={12}>
          <ScrollableDataTable
            title="Scrollable Data Table"
            description="DataGrid com rolagem vertical"
            data={employeesData}
          />
        </Grid>

        <Grid item xs={12}>
          <FixedColumnsTable
            title="Fixed Columns Table"
            description="DataGrid com colunas fixas à esquerda e à direita"
            data={employeesData}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
