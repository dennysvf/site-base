import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

type Employee = {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
};

type ButtonsDataTableProps = {
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

export function ButtonsDataTable({ title, description, data }: ButtonsDataTableProps) {
  const handleExportCSV = () => {
    const csvContent = [
      columns.map(col => col.headerName),
      ...data.map(row => columns.map(col => row[col.field as keyof Employee])),
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.csv';
    link.click();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <Stack direction="row" spacing={2} mb={2}>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            onClick={handleExportCSV}
          >
            Export CSV
          </Button>
        </Stack>

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
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
