import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const sample = [
  [`Professional Certificate Program in Product Management`, '₹7,000', '₹9,000'],
  ['PG Certificate Program in Strategic Product Management', '₹9,000', '₹11,000'],
  ['Executive Program in Data Driven Product Management', '₹10,000', '₹10,000'],
  ['Executive Program in Product Management and Digital Transformation', '₹10,000', '₹10,000'],
  ['Executive Program in Product Management', '₹10,000', '₹10,000'],
  ['Advanced Certification in Product Management', '₹10,000', '₹10,000'],
  ['Executive Program in Product Management and Project Management', '₹10,000', '₹10,000'],
];

function createData(id, dessert, calories, fat) {
  return { id, dessert, calories, fat };
}

const columns = [
  {
    width: 200,
    label: 'Programs',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Referrer Bonus',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Referee Bonus',
    dataKey: 'fat',
    numeric: true,
  }
  
];

const rows = Array.from({ length:  7}, (_, index) => {
  console.log(index)
  const randomSelection = sample[index];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: '#EEF5FF',
            color:'#1A73E8'
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
           <div>
              {column.dataKey == 'dessert' ?<img src="Group.png" alt="row image" style={{ width: '20px', height: '20px', marginRight: '10px' }} />:""}
              <span>{row[column.dataKey]}</span>
            </div>
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 460, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
