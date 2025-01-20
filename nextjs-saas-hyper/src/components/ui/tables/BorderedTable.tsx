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

type BorderedTableProps = {
  title: string;
  description: string;
  columns: string[];
  rows: Row[];
  variant: 'primary' | 'success';
};

const BorderedTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant: 'primary' | 'success' }>(({ theme, variant }) => ({
  border: '1px solid',
  borderColor:
    variant === 'primary'
      ? theme.palette.primary.light
      : theme.palette.success.light,
}));

const BorderedTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant: 'primary' | 'success' }>(({ theme, variant }) => ({
  '&:hover': {
    backgroundColor:
      variant === 'primary'
        ? theme.palette.primary.lighter
        : theme.palette.success.lighter,
  },
}));

export function BorderedTable({ title, description, columns, rows, variant }: BorderedTableProps) {
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
                  <BorderedTableCell key={index} variant={variant}>
                    {column}
                  </BorderedTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <BorderedTableRow key={index} variant={variant}>
                  <BorderedTableCell variant={variant}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Avatar src={row.user.avatar} alt={row.user.name} />
                      {row.user.name}
                    </div>
                  </BorderedTableCell>
                  <BorderedTableCell variant={variant}>{row.accountNo}</BorderedTableCell>
                  <BorderedTableCell variant={variant}>{row.balance}</BorderedTableCell>
                  <BorderedTableCell variant={variant}>
                    <Button variant="text" color={variant}>
                      {row.action}
                    </Button>
                  </BorderedTableCell>
                </BorderedTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
