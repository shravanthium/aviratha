// in src/posts.js
// tslint:disable-next-line:no-var-requires
import {
  Stack,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import { TopToolbar, SelectColumnsButton, FilterButton, CreateButton, ExportButton } from 'react-admin';

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  ArrayField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
  NumberInput,
  usePermissions,
  Labeled,
  useRecordContext,
  useNotify,
  useRedirect,
} from "react-admin";

const SchoolFilter = [
<TextInput label="Search" source="village" alwaysOn />,
<TextInput label="District" source="district"/>,
<TextInput label="Team Lead" source="teamlead"/>,
]


const ListActions = () => (
  <TopToolbar>
      <FilterButton/>
      <CreateButton/>
      <ExportButton/>
  </TopToolbar>
);


export const SchoolList = (props: any) => {
  const { permissions } = usePermissions();

  const StudentsTotalField = ({ label }: { label: string }) => {
    const record = useRecordContext();
    const totalCount = record.classes.reduce((sum: any, item: any) => sum + parseInt(item.count), 0);
    return totalCount;
}

  return (
    <List sx={{ p: 2 }} {...props} actions={<ListActions/>} filters={SchoolFilter} sortable={false}>
      <Datagrid rowClick="show" sx={{ "& .RaDatagrid-headerCell": {
                    fontWeight: 'bold', m: 1
                }, }}>
        <TextField source="name" label="Name" />
        <TextField source="village" label="Village" />
        <TextField source="taluk" label="Taluk" />
        <TextField source="district" label="District" />
        <TextField source="schoolcoordinator" label="School Coordinator" />
        <TextField source="teamlead" label="Team Lead" />
        <TextField source="schoolcontact" label="School Contact" />
        <TextField source="schoolcontactno" label="School Contact No." />
        <StudentsTotalField  label="Total Students" />
        <ShowButton label="" />
        <EditButton label="" />
        {permissions === 'admin' && <DeleteButton label="" />}

      </Datagrid>
    </List>
  );
}

const CustomTable = () => {
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

const GuideLineTable = () => {
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
      <Table>
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

export const SchoolShow = (props: any) => {
  return (
    <Show {...props} title="name">
      <SimpleShowLayout>

        <Stack spacing={2} direction="row">
          <Labeled>
            <TextField source="id" label="Id" />
          </Labeled>
        </Stack>
        <Stack spacing={2} direction="row">
          <Labeled>
            <TextField source="name" label="Name" />
          </Labeled>

        </Stack>
        <Stack spacing={2} direction="row">
          <Labeled>
            <TextField source="village" label="Village" />
          </Labeled>
          <Labeled>
            <TextField source="taluk" label="Taluk" />
          </Labeled>
          <Labeled>
            <TextField source="district" label="District" />
          </Labeled>
          <Labeled>
            <TextField source="schoolcoordinator" label="School Coordinator" />
          </Labeled>
          <Labeled>
            <TextField source="teamlead" label="Team Lead" />
          </Labeled>
          <Labeled>
            <TextField source="schoolcontact" label="School Contact" />
          </Labeled>
          <Labeled>
            <TextField source="schoolcontactno" label="School Contact No." />
          </Labeled>
        </Stack>
        <ArrayField source="classes" label="Classwise Students Count">
          <CustomTable />
        </ArrayField>

        <ArrayField source="classes" label="Guideline">
          <GuideLineTable />
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
}






