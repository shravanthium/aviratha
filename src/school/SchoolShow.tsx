import { Stack, Button,  } from "@mui/material";
import { Show, SimpleShowLayout, Labeled, TextField, ArrayField } from "react-admin";
import { GuideLineTable } from "./GuidelineTable";
import { ClassWiseCount } from "./ClassWiseCount";
import { useReactToPrint } from 'react-to-print';
import React, { useRef, forwardRef } from 'react';
import { TopToolbar, EditButton } from 'react-admin';
import PrintIcon from '@mui/icons-material/Print';

export const SchoolShow = (props: any) => {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const PrintButton = () => (
    <TopToolbar>
      <EditButton />
      <Button variant="outlined" size="small" startIcon={<PrintIcon />} onClick={() => {
      handlePrint(null, () => contentToPrint.current);
    }}>PRINT</Button> 
</TopToolbar>
    
  );
  return (
    <div>
          
      <div  ref={contentToPrint}>
      
      <Show {...props} title="name" sx={{ p: 2 }} actions={<PrintButton />}>
        <SimpleShowLayout>
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
            <ClassWiseCount />
          </ArrayField>

          <ArrayField source="classes" label="Guideline">
            <GuideLineTable />
          </ArrayField>
        </SimpleShowLayout>
      </Show>
      </div>
      
    </div>

  );
}