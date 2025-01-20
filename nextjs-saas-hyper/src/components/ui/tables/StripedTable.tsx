import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Button,
  styled,
} from '@mui/material';

type User = {
  name: string;
  avatar: string;
};

type Row = {
  user: User;
  accountNo: string;
  balance: string;
  action: string;
};

type StripedTableProps = {
  title: string;
  description: string;
  columns: string[];
  rows: Row[];
};

const StripedTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export function StripedTable({ title, description, columns, rows }: StripedTableProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StripedTableRow key={index}>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Avatar src={row.user.avatar} alt={row.user.name} />
                      {row.user.name}
                    </div>
                  </TableCell>
                  <TableCell>{row.accountNo}</TableCell>
                  <TableCell>{row.balance}</TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      {row.action}
                    </Button>
                  </TableCell>
                </StripedTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
