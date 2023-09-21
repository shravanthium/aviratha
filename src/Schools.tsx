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
  useRecordContext
} from "react-admin";

const SchoolFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const SchoolList = (props: any) => {
  const { permissions } = usePermissions();

  return (
    <List {...props} filters={<SchoolFilter />} sortable={false}>
      <Datagrid>
        <TextField source="name" label="Name" />
        <TextField source="village" label="Village" />
        <TextField source="taluk" label="Taluk" />
        <TextField source="district" label="District" />
        <TextField source="schoolcoordinator" label="School Coordinator" />
        <TextField source="teamlead" label="Team Lead" />
        <TextField source="schoolcontact" label="School Contact" />
        <TextField source="schoolcontactno" label="School Contact No." />
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
            <TableCell>Class</TableCell>
            {record.classes.map((item: any, index: any) => (
              <TableCell key={index}>{index + 1}</TableCell>

            ))}
          </TableRow>
          <TableRow>
            <TableCell>No. Of Students</TableCell>
            {record.classes.map((item: any, index: any) => (
              <TableCell key={index}>{item.count}</TableCell>

            ))}
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell >Total</TableCell>
            <TableCell >{totalCount}</TableCell>
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
  for (const bookType of bookTypes) {
    for (let i = 0; i < guideline.length; i++) {
      console.log(i, bookType, guideline[i][bookType]);
    }
  }
  const totalCount = []
  const totalCost = []
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Class</TableCell>
            {record.classes.map((item: any, index: any) => (
              <TableCell key={index}>{index + 1}</TableCell>

            ))}
          </TableRow>
          <TableRow>
            <TableCell>No. Of Students</TableCell>
            {record.classes.map((item: any, index: any) => (
              <TableCell key={index}>{item.count}</TableCell>

            ))}
          </TableRow>
          {
            bookTypes.map((bookType, i) => (
              <TableRow key={i}>
                <TableCell>{bookType}</TableCell>
                {record.classes.map((item: { count: string; }, index: Number) => {
                  // Check if index is a valid number
                  if (typeof index === 'number') {
                    return (
                      <TableCell key={index}>
                        {parseInt(item.count) * guideline[index][bookType]}
                      </TableCell>
                    );
                  }
                  return null; // Return null for invalid indices
                })}
              </TableRow>
            ))
          }
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



export const SchoolCreate = (props: any) => {
  const choices = [
    { code: 'GLPS', name: 'Govt Lower Primay School' },
    { code: 'GHPS', name: 'Govt Higher Primay School' },
    { code: 'GPS', name: 'Govt Primary School' },
  ];
  return (<Create {...props}>
    <SimpleForm>
      <SelectInput source="name" choices={choices} />
      <Stack spacing={2} direction="row">
        <TextInput source="village" />
        <TextInput source="taluk" />
        <TextInput source="district" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextInput source="teamlead" label="Team Lead" />
        <TextInput source="schoolcoordinator" label="School Coordinator" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextInput source="schoolcontact" label="School Contact" />
        <TextInput source="schoolcontactno" label="School Contact No." />
      </Stack>
      {/* Render 10 NumberInput fields with fixed names */}
      <Stack spacing={2} direction="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <div key={index}>
            <TextInput label="" source={`classes[${index - 1}].name`} defaultValue={`Class ${index}`} disabled />
            <NumberInput label="Count" source={`classes[${index - 1}].count`} defaultValue="0" />
          </div>
        ))}
      </Stack>
    </SimpleForm>
  </Create>
  );
}


export const SchoolEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <Stack spacing={2} direction="row">
        <TextInput source="village" />
        <TextInput source="taluk" />
        <TextInput source="district" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextInput source="teamlead" label="Team Lead" />
        <TextInput source="schoolcoordinator" label="School Coordinator" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextInput source="schoolcontact" label="School Contact" />
        <TextInput source="schoolcontactno" label="School Contact No." />
      </Stack>
      {/* Render 10 NumberInput fields with fixed names */}
      <Stack spacing={2} direction="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <div key={index}>
            <TextInput label="" source={`classes[${index - 1}].name`} defaultValue={`Class ${index}`} disabled />
            <NumberInput label="Count" source={`classes[${index - 1}].count`} defaultValue="0" />
          </div>
        ))}
      </Stack>
    </SimpleForm>
  </Edit>
);


