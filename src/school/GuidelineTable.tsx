import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useRecordContext } from "react-admin";

export const GuideLineTable = () => {
    const record: any = useRecordContext();
    if (!record) return null;
  
    const guideline: Record<string, number>[] = [
      {
        "Drawing": 1, "Square": 1, "DoubleRule": 1, "FourLine": 1, "SingleRule": 0, "HorizantalMath": 0, "Unruled": 0, "Graph": 0
      }, {
        "Drawing": 1, "Square": 1, "DoubleRule": 1, "FourLine": 1, "SingleRule": 0, "HorizantalMath": 0, "Unruled": 0, "Graph": 0
      }, {
        "Drawing": 1, "Square": 0, "DoubleRule": 1, "FourLine": 1, "SingleRule": 2, "HorizantalMath": 0, "Unruled": 0, "Graph": 0
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 1, "FourLine": 1, "SingleRule": 2, "HorizantalMath": 1, "Unruled": 0, "Graph": 0
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 1, "FourLine": 1, "SingleRule": 3, "HorizantalMath": 1, "Unruled": 1, "Graph": 0
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 1, "FourLine": 1, "SingleRule": 3, "HorizantalMath": 1, "Unruled": 1, "Graph": 0
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 1, "FourLine": 1, "SingleRule": 3, "HorizantalMath": 1, "Unruled": 1, "Graph": 1
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 1, "FourLine": 0, "SingleRule": 4, "HorizantalMath": 2, "Unruled": 2, "Graph": 1
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 0, "FourLine": 0, "SingleRule": 4, "HorizantalMath": 2, "Unruled": 2, "Graph": 1
      }, {
        "Drawing": 0, "Square": 0, "DoubleRule": 0, "FourLine": 0, "SingleRule": 4, "HorizantalMath": 2, "Unruled": 2, "Graph": 1
      }
    ]
  
    const bookTypes = ["Drawing", "Square", "DoubleRule", "FourLine", "SingleRule", "HorizantalMath", "Unruled", "Graph"]
    const bookCosts: any = {
      "Drawing": 24,
      "Square": 30,
      "DoubleRule": 30,
      "FourLine": 30,
      "SingleRule": 30,
      "HorizantalMath": 30,
      "Unruled": 30,
      "Graph":17
    };
    for (const bookType of bookTypes) {
      for (let i = 0; i < guideline.length; i++) {
        console.log(i, bookType, guideline[i][bookType]);
      }
    }
    const totalStudentsCount = record.classes.reduce((sum: any, item: any) => sum + parseInt(item.count), 0);
    const totalCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bookWiseCount: number[] = [0,0,0,0,0,0,0,0];
    const computeTotal = (index: number, count: number, value: number) => {
      const product = count * value; 
      totalCount[index] += product; 
      return product;
    };
  
    let totalSchoolCost = 0
    let totalSchoolBooksCount = 0
    const computeTotalCost = (booksCount:number, cost:number) => {
      const bookWiseTotalCost = booksCount * cost;
      totalSchoolBooksCount += booksCount;
      totalSchoolCost += bookWiseTotalCost;
      return bookWiseTotalCost
  
    }
  
    return (
      <TableContainer component={Paper}>
        <Table size={'small'}>
          <TableBody>
            <TableRow >
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Class</TableCell>
              {record.classes.map((item: any, index: any) => (
                <TableCell key={index} sx={{ fontWeight: 'bold', m: 1 }}>{index + 1}</TableCell>
  
              ))}
              <TableCell  sx={{ fontWeight: 'bold', m: 1}}>Total</TableCell>
              <TableCell  sx={{ fontWeight: 'bold', m: 1}}>Cost/Book</TableCell>
              <TableCell  sx={{ fontWeight: 'bold', m: 1}}>Total Cost</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', m: 1, color:'red' }}>No. Of Students</TableCell>
              {record.classes.map((item: any, index: any) => (
                <TableCell key={index} sx={{ fontWeight: 'bold', m: 1, color:'red'}}>{item.count}</TableCell>
  
              ))}
              <TableCell sx={{ fontWeight: 'bold', m: 1, color:"red" }}>{totalStudentsCount}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            {
              bookTypes.map((bookType, i) => (
                <TableRow key={i}>
                  <TableCell sx={{ fontWeight: 'bold', m: 1 }}>{bookType}</TableCell>
                  {record.classes.map((item: { count: string; }, index: Number) => {
                    // Check if index is a valid number
                    if (typeof index === 'number') {
                      const _total = computeTotal(index,parseInt(item.count),guideline[index][bookType])
                      bookWiseCount[i] += _total
                      return (
                        <TableCell key={index}>
                          {_total}
                        </TableCell>
                      );
                    }
                    return null; // Return null for invalid indices
                  })}
                  <TableCell  sx={{ fontWeight: 'bold', m: 1, color:"green" }}>{bookWiseCount[i]}</TableCell>
                  <TableCell  sx={{ fontWeight: 'bold', m: 1, color:"green" }}>{bookCosts[bookType]}</TableCell>
                  <TableCell  sx={{ fontWeight: 'bold', m: 1, color:"green" }}>{computeTotalCost(bookWiseCount[i], bookCosts[bookType])}</TableCell>
                </TableRow>
              ))
            }
             <TableRow sx={{backgroundColor: "LightGrey",}}>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Total</TableCell>
              {totalCount.map((item: any, index: any) => (
                <TableCell key={index} sx={{ fontWeight: 'bold', m: 1 }}>{item}</TableCell>
  
              ))}
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>{totalSchoolBooksCount}</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}></TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1, color:"red" }}>{totalSchoolCost} &#8377;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  