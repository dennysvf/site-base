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

type FixedColumnsTableProps = {
  title: string;
  description: string;
  data: Employee[];
};

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Name', 
    width: 200,
    pinned: 'left' 
  },
  { 
    field: 'position', 
    headerName: 'Position', 
    width: 250,
    pinned: 'left'
  },
  { field: 'office', headerName: 'Office', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'startDate', headerName: 'Start date', width: 150 },
  { 
    field: 'salary', 
    headerName: 'Salary', 
    width: 150,
    pinned: 'right'
  },
  { 
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    pinned: 'right',
    renderCell: () => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn btn-sm btn-primary">Edit</button>
        <button className="btn btn-sm btn-danger">Delete</button>
      </div>
    ),
  },
];

export function FixedColumnsTable({ title, description, data }: FixedColumnsTableProps) {
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
