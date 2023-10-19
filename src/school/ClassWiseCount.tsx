import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useRecordContext } from "react-admin";

export const ClassWiseCount = () => {
    const record: any = useRecordContext();
    if (!record) return null;
  
    const totalCount = record.classes.reduce((sum: any, item: any) => sum + parseInt(item.count), 0);
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Class</TableCell>
              {record.classes.map((item: any, index: any) => (
                <TableCell key={index} sx={{ fontWeight: 'bold', m: 1 }}>{index + 1}</TableCell>
  
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>No. Of Students</TableCell>
              {record.classes.map((item: any, index: any) => (
                <TableCell key={index}>{item.count}</TableCell>
  
              ))}
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Total</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>{totalCount}</TableCell>
            </TableRow>
          </TableBody>
  
  
        </Table>
      </TableContainer>
    );
  };