// in src/posts.js
// tslint:disable-next-line:no-var-requires
import React, { useRef } from 'react';
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

import { GuideLineTable } from './GuidelineTable';


import { useReactToPrint } from 'react-to-print';



const SchoolFilter = [
  <TextInput label="Search" source="village" alwaysOn />,
  <TextInput label="District" source="district" />,
  <TextInput label="Team Lead" source="teamlead" />,
]


const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);


export const SchoolList = (props: any) => {
  const { permissions } = usePermissions();

  const StudentsTotalField = ({ label }: { label: string }) => {
    const record = useRecordContext();
    const totalCount = record.classes.reduce((sum: any, item: any) => sum + parseInt(item.count), 0);
    return totalCount;
  }

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
     content: () => componentRef.current,
     documentTitle: 'Visitor Pass',
     onAfterPrint: () => console.log('Printed PDF successfully!'),
    });

  return (
    <>
    <button style={{
      width: '100px',
      height: '50px',
      fontSize: '20px',
      margin: 'auto',
      display: 'block',
      marginTop: '20px',
}} onClick={handlePrint}>Print pass</button>
    <List sx={{ p: 2 }} {...props} actions={<ListActions />} filters={SchoolFilter} sortable={false}>
      <Datagrid rowClick="show" sx={{
        "& .RaDatagrid-headerCell": {
          fontWeight: 'bold', m: 1
        },
      }}>
        <TextField source="name" label="Name" />
        <TextField source="village" label="Village" />
        <TextField source="taluk" label="Taluk" />
        <TextField source="district" label="District" />
        <TextField source="schoolcoordinator" label="School Coordinator" />
        <TextField source="teamlead" label="Team Lead" />
        <TextField source="schoolcontact" label="School Contact" />
        <TextField source="schoolcontactno" label="School Contact No." />
        <StudentsTotalField label="Total Students" />
        <ShowButton label="" />
        <EditButton label="" />
        {permissions === 'admin' && <DeleteButton label="" />}

      </Datagrid>
    </List>
    </>
  );
}


