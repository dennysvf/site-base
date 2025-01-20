import { Card, CardContent, Typography, Chip } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';

type Employee = {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
};

type SelectionDataTableProps = {
  title: string;
  description: string;
  data: Employee[];
};

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'position', headerName: 'Position', flex: 1 },
  { field: 'office', headerName: 'Office', flex: 1 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'startDate', headerName: 'Start date', flex: 1 },
  { field: 'salary', headerName: 'Salary', flex: 1 },
];

export function SelectionDataTable({ title, description, data }: SelectionDataTableProps) {
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        {selectedRows.length > 0 && (
          <Chip
            label={`${selectedRows.length} rows selected`}
            color="primary"
            sx={{ mb: 2 }}
          />
        )}

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => {
              setSelectedRows(newSelection);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
