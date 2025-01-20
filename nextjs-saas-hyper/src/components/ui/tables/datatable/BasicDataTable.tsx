import { Card, CardContent, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Employee = {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
};

type BasicDataTableProps = {
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

export function BasicDataTable({ title, description, data }: BasicDataTableProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

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
            checkboxSelection={false}
            disableRowSelectionOnClick
          />
        </div>
      </CardContent>
    </Card>
  );
}
